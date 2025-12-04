import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormContact from '@/components/contact-form/FormContact';
import { LanguageProvider } from '@/context/LanguageContex';
import { ToastProvider } from '@/components/ui/Toast';

// Mock emailjs
vi.mock('emailjs-com', () => ({
  default: {
    send: vi.fn(() => Promise.resolve({ text: 'OK' })),
  },
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ToastProvider>
        {component}
      </ToastProvider>
    </LanguageProvider>
  );
};

describe('FormContact', () => {
  it('renders all form fields', () => {
    renderWithProviders(<FormContact />);
    
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/apellido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    const { container } = renderWithProviders(<FormContact />);
    
    const form = container.querySelector('form');
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/el nombre es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el apellido es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el email es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/el mensaje es requerido/i)).toBeInTheDocument();
    });
  });

  it('shows error for invalid email', async () => {
    const user = userEvent.setup();
    const { container } = renderWithProviders(<FormContact />);
    
    const emailInput = screen.getByLabelText(/correo/i);
    await user.type(emailInput, 'invalid-email');
    
    const form = container.querySelector('form');
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/el email no es válido/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const emailjs = await import('emailjs-com');
    const { container } = renderWithProviders(<FormContact />);
    
    // Fill form
    await user.type(screen.getByLabelText(/nombre/i), 'John');
    await user.type(screen.getByLabelText(/apellido/i), 'Doe');
    await user.type(screen.getByLabelText(/correo/i), 'john@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Test message');

    const form = container.querySelector('form');
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(emailjs.default.send).toHaveBeenCalled();
    });
  });

  it('has proper ARIA attributes', () => {
    renderWithProviders(<FormContact />);
    
    const firstnameInput = screen.getByLabelText(/nombre/i);
    expect(firstnameInput).toHaveAttribute('aria-invalid', 'false');
    expect(firstnameInput).toHaveAttribute('required');
  });
});
