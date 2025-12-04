import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton';

describe('Skeleton', () => {
  it('renders with default variant', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('animate-pulse');
    expect(skeleton).toHaveClass('bg-gray-300');
  });

  it('renders with text variant', () => {
    const { container } = render(<Skeleton variant="text" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('h-4');
    expect(skeleton).toHaveClass('rounded');
  });

  it('renders with circular variant', () => {
    const { container } = render(<Skeleton variant="circular" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('rounded-full');
  });

  it('has proper ARIA attributes', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveAttribute('aria-live', 'polite');
    expect(skeleton).toHaveAttribute('aria-busy', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeleton = container.firstChild;
    
    expect(skeleton).toHaveClass('custom-class');
  });
});

describe('SkeletonCard', () => {
  it('renders card skeleton with multiple elements', () => {
    const { container } = render(<SkeletonCard />);
    const skeletons = container.querySelectorAll('[aria-busy="true"]');
    
    expect(skeletons.length).toBeGreaterThan(1);
  });
});

describe('SkeletonText', () => {
  it('renders default 3 lines', () => {
    const { container } = render(<SkeletonText />);
    const skeletons = container.querySelectorAll('[aria-busy="true"]');
    
    expect(skeletons).toHaveLength(3);
  });

  it('renders custom number of lines', () => {
    const { container } = render(<SkeletonText lines={5} />);
    const skeletons = container.querySelectorAll('[aria-busy="true"]');
    
    expect(skeletons).toHaveLength(5);
  });
});
