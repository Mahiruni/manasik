# ALMAIR — Supabase Auth email templates

These are production-oriented, responsive HTML designs for Supabase's built-in authentication messages. **Files are staged in GitHub; they are not installed in Supabase Auth automatically.** The connected Supabase tools do not expose Auth email template configuration.

## Install manually in Supabase Dashboard
Open https://supabase.com/dashboard/project/kgewofhjunfypqsylsjq/auth/templates and paste the contents of each file into the corresponding template:
- confirm-signup.html → Confirm signup
- reset-password.html → Reset password
- magic-link.html → Magic link
- invite.html → Invite user
- change-email.html → Change email address

Set subjects respectively:
- Confirm your ALMAIR email
- Reset your ALMAIR password
- Sign in to ALMAIR
- Your ALMAIR invitation
- Confirm your new ALMAIR email

These use Supabase Go template variable `{{ .ConfirmationURL }}`. Do not replace it with a hardcoded URL. Verify that your configured Site URL and Redirect URLs point to the intended ALMAIR production domain, not a temporary preview deployment. Test each template with an isolated test account.

## Delivery and security
Supabase's default mail sender has limits and is not suitable for reliable large-volume production sending. Configure a verified sending domain and custom SMTP provider before launch; validate SPF, DKIM and DMARC. Do not commit SMTP credentials.

Database table `email_delivery_events` is for **future** trusted-server delivery audit integration; it is not currently connected to Supabase's built-in Auth mailer. An email template is not proof that any message has been delivered.

Enable leaked-password protection in Supabase Auth password settings. Verify signup, confirmation, reset, invite and email-change flows end to end.
