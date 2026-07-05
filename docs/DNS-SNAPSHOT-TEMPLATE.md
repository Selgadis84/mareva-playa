# DNS snapshot — fill in BEFORE Phase B cutover

**Date:** _______________  
**Taken by:** _______________  
**Where:** Google Domains / Google Admin → DNS for `marevaplaya.com.mx`

## Current web records (before change)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| | | | |
| | | | |

## MX records (DO NOT DELETE — copy exactly)

| Priority | Host | Value |
|----------|------|-------|
| | @ | |
| | | |

## TXT / SPF / DKIM (copy all)

| Host | Value |
|------|-------|
| @ | |
| | |

## Rollback plan

If email breaks after DNS change:

1. Remove newly added web CNAME/A records
2. Restore web records from table above
3. Wait 15–60 min for propagation
4. Send test email to `info@marevaplaya.com.mx` and `reservas@marevaplaya.com.mx`
