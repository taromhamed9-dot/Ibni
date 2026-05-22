import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import {
  Checkbox,
  Divider,
  PasswordField,
  SocialButton,
  TextField,
} from "@/components/auth/auth-inputs";
import { Icon } from "@/components/icons";

export const metadata = { title: "تسجيل الدخول" };

export default function LoginPage() {
  return (
    <AuthShell
      side="signin"
      eyebrow="تسجيل الدخول"
      title={<>أهلاً بعودتك <span className="gradient-text-warm">إلى إبني.</span></>}
      description="أدخل بياناتك لمتابعة رحلة أطفالك."
      footer={
        <>
          ليس لديك حساب؟{" "}
          <Link href="/signup" className="font-bold" style={{ color: "var(--orange)" }}>
            أنشئ حساباً جديداً
          </Link>
        </>
      }
    >
      <div className="flex gap-3">
        <SocialButton provider="google" label="الدخول عبر Google" />
        <SocialButton provider="apple" label="الدخول عبر Apple" />
      </div>

      <Divider>أو</Divider>

      <form className="space-y-4" action="#" method="post">
        <TextField
          label="البريد الإلكتروني"
          icon={<Icon.At size={18} />}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="parent@example.com"
          required
          dir="ltr"
        />

        <PasswordField
          label="كلمة السر"
          autoComplete="current-password"
          placeholder="••••••••"
        />

        <div className="flex items-center justify-between gap-3 pt-1">
          <Checkbox label="تذكّرني" defaultChecked />
          <Link href="#" className="text-xs font-semibold" style={{ color: "var(--orange)" }}>
            نسيت كلمة السر؟
          </Link>
        </div>

        <button type="submit" className="btn-primary mt-2 w-full justify-center">
          <Icon.ArrowLeft size={18} />
          تسجيل الدخول
        </button>
      </form>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
        <Icon.Shield size={14} />
        تشفير شامل — بياناتك لا تُشارك مع أي طرف ثالث.
      </p>
    </AuthShell>
  );
}
