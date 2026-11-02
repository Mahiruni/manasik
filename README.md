# MANASIK

Unified Hajj and Umrah marketplace for Ethiopia, developed by Hisab Technologies PLC.

## Setup

Run `npm install`, copy `.env.example` to `.env.local`, configure the Supabase public URL and publishable key, then run `npm run dev`.

## Routes

- `/`: Landing page
- `/login`: Sign-in and registration
- `/packages`: Published packages
- `/agencies`: Approved agency directory
- `/departures`: Upcoming departures and booking requests
- `/bookings`: Personal booking status
- `/agency/apply`: Agency application intake
- `/agency/dashboard`: Applicant's own application status

## Security

The Supabase backend enforces RLS. Public agency listings require approval. Booking creation is authenticated and restricted to published packages from approved agencies. Never expose service-role keys to browser clients.

**Not production-ready:** Agency review, inventory locking, payment processing, authorization testing, multilingual implementation, and full operational dashboards are pending.
