// Simple in-memory rate limiter for development
// For production, use Redis or Upstash

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

interface RateLimitOptions {
  interval: number; // in milliseconds
  uniqueTokenPerInterval: number; // max requests per interval
}

export class RateLimiter {
  private interval: number;
  private uniqueTokenPerInterval: number;

  constructor(options: RateLimitOptions) {
    this.interval = options.interval;
    this.uniqueTokenPerInterval = options.uniqueTokenPerInterval;
  }

  async check(identifier: string): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
    const now = Date.now();
    const tokenData = store[identifier];

    if (!tokenData || now > tokenData.resetTime) {
      // Create new entry or reset
      store[identifier] = {
        count: 1,
        resetTime: now + this.interval,
      };

      return {
        success: true,
        limit: this.uniqueTokenPerInterval,
        remaining: this.uniqueTokenPerInterval - 1,
        reset: now + this.interval,
      };
    }

    if (tokenData.count >= this.uniqueTokenPerInterval) {
      return {
        success: false,
        limit: this.uniqueTokenPerInterval,
        remaining: 0,
        reset: tokenData.resetTime,
      };
    }

    tokenData.count += 1;

    return {
      success: true,
      limit: this.uniqueTokenPerInterval,
      remaining: this.uniqueTokenPerInterval - tokenData.count,
      reset: tokenData.resetTime,
    };
  }
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 60000); // Clean every minute
