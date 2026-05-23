"use client";

import { useId, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Icon } from "@/components/icons";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
  hint?: string;
};

export function TextField({ label, icon, hint, type = "text", className, ...rest }: FieldProps) {
  const id = useId();
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
        {label}
      </label>
      <div className="auth-input">
        {icon && <span className="auth-input-icon">{icon}</span>}
        <input id={id} type={type} className={`auth-input-field ${className ?? ""}`} {...rest} />
      </div>
      {hint && <p className="text-xs" style={{ color: "var(--text-muted)" }}>{hint}</p>}
      <style jsx>{`
        .auth-input {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 0 14px;
          transition: border-color var(--dur-micro) var(--ease-spring), box-shadow var(--dur-micro) var(--ease-spring);
        }
        .auth-input:focus-within {
          border-color: color-mix(in srgb, var(--orange) 50%, var(--border-color));
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--orange) 18%, transparent);
        }
        .auth-input-icon {
          display: inline-flex;
          color: var(--text-muted);
        }
        .auth-input-field {
          flex: 1;
          background: transparent;
          border: 0;
          outline: none;
          color: var(--text);
          font-size: 15px;
          padding: 12px 0;
          font-family: inherit;
        }
        .auth-input-field::placeholder { color: color-mix(in srgb, var(--text-muted) 80%, transparent); }
      `}</style>
    </div>
  );
}

export function PasswordField({
  label,
  hint,
  placeholder,
  autoComplete = "current-password",
}: {
  label: string;
  hint?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = useId();
  const [shown, setShown] = useState(false);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
        {label}
      </label>
      <div className="auth-input">
        <span className="auth-input-icon"><Icon.Lock size={18} /></span>
        <input
          id={id}
          type={shown ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="auth-input-field"
        />
        <button
          type="button"
          onClick={() => setShown((v) => !v)}
          className="auth-input-toggle"
          aria-label={shown ? "إخفاء كلمة السر" : "إظهار كلمة السر"}
        >
          {shown ? <Icon.EyeOff size={18} /> : <Icon.Eye size={18} />}
        </button>
      </div>
      {hint && <p className="text-xs" style={{ color: "var(--text-muted)" }}>{hint}</p>}
      <style jsx>{`
        .auth-input {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 0 14px;
          transition: border-color var(--dur-micro) var(--ease-spring), box-shadow var(--dur-micro) var(--ease-spring);
        }
        .auth-input:focus-within {
          border-color: color-mix(in srgb, var(--orange) 50%, var(--border-color));
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--orange) 18%, transparent);
        }
        .auth-input-icon {
          display: inline-flex;
          color: var(--text-muted);
        }
        .auth-input-field {
          flex: 1;
          background: transparent;
          border: 0;
          outline: none;
          color: var(--text);
          font-size: 15px;
          padding: 12px 0;
          font-family: inherit;
        }
        .auth-input-field::placeholder { color: color-mix(in srgb, var(--text-muted) 80%, transparent); }
        .auth-input-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 8px;
          color: var(--text-muted);
          transition: color var(--dur-micro) var(--ease-spring), background-color var(--dur-micro) var(--ease-spring);
        }
        .auth-input-toggle:hover {
          color: var(--text);
          background: color-mix(in srgb, var(--text) 6%, transparent);
        }
      `}</style>
    </div>
  );
}

export function SocialButton({
  provider,
  label,
}: {
  provider: "google" | "apple";
  label: string;
}) {
  const isGoogle = provider === "google";
  return (
    <button
      type="button"
      className="social-btn"
      aria-label={label}
    >
      <span className="social-btn-icon">
        {isGoogle ? <Icon.Google size={18} /> : <Icon.Apple size={18} />}
      </span>
      <span>{label}</span>
      <style jsx>{`
        .social-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 46px;
          border-radius: 14px;
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          transition: transform var(--dur-micro) var(--ease-spring), border-color var(--dur-micro) var(--ease-spring), background-color var(--dur-micro) var(--ease-spring);
          will-change: transform;
        }
        .social-btn:hover {
          transform: translate3d(0, -1px, 0);
          border-color: color-mix(in srgb, var(--text) 18%, var(--border-color));
          background: color-mix(in srgb, var(--text) 4%, var(--card-bg));
        }
        .social-btn-icon { display: inline-flex; }
      `}</style>
    </button>
  );
}

export function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-px flex-1" style={{ background: "var(--border-color)" }} />
      <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{children}</span>
      <span className="h-px flex-1" style={{ background: "var(--border-color)" }} />
    </div>
  );
}

export function Checkbox({ label, defaultChecked }: { label: ReactNode; defaultChecked?: boolean }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm" style={{ color: "var(--text)" }}>
      <input id={id} type="checkbox" defaultChecked={defaultChecked} className="auth-checkbox" />
      <span className="leading-relaxed">{label}</span>
      <style jsx>{`
        .auth-checkbox {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 6px;
          border: 1.5px solid var(--border-color);
          background: var(--card-bg);
          margin-top: 2px;
          cursor: pointer;
          transition: border-color var(--dur-micro) var(--ease-spring), background-color var(--dur-micro) var(--ease-spring);
          flex-shrink: 0;
          position: relative;
        }
        .auth-checkbox:checked {
          background: var(--orange);
          border-color: var(--orange);
        }
        .auth-checkbox:checked::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='m5 12 4 4L19 6'/></svg>");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px 14px;
        }
        .auth-checkbox:focus-visible {
          outline: 2px solid color-mix(in srgb, var(--orange) 60%, transparent);
          outline-offset: 2px;
        }
      `}</style>
    </label>
  );
}
