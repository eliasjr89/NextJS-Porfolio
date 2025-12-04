import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavButton } from '@/components/buttons/NavButton';

describe('NavButton', () => {
  it('renders with label and icon', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    
    render(
      <NavButton
        href="/test"
        label="Test Button"
        icon={MockIcon}
      />
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    const MockIcon = () => <svg />;
    
    render(
      <NavButton
        href="/test"
        label="Test Button"
        title="Test Title"
        icon={MockIcon}
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Test Button');
    expect(button).toHaveAttribute('title', 'Test Title');
  });

  it('shows active state for current page', () => {
    const MockIcon = () => <svg />;
    
    render(
      <NavButton
        href="/"
        label="Home"
        icon={MockIcon}
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-current', 'page');
  });

  it('applies focus styles', () => {
    const MockIcon = () => <svg />;
    
    const { container } = render(
      <NavButton
        href="/test"
        label="Test"
        icon={MockIcon}
      />
    );
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('focus-visible:outline-none');
    expect(button).toHaveClass('focus-visible:ring-2');
  });
});
