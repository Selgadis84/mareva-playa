# URL Redirect Map — marevaplaya.com → marevaplaya.com.mx

Apply in Cloudflare Redirect Rules when Phase 5B is ready.

| Old URL (marevaplaya.com) | New URL (marevaplaya.com.mx) |
|---------------------------|------------------------------|
| `/home/` | `/` |
| `/home` | `/` |
| `/alojamientos/` | `/alojamientos` |
| `/servicios/` | `/servicios` |
| `/galeria/` | `/galeria` |
| `/ubicacion-contacto/` | `/contacto` |
| `/contacto/` | `/contacto` |
| All other paths | `https://marevaplaya.com.mx/` |

## Cloudflare rule (example)

```
Expression: (http.host eq "marevaplaya.com" or http.host eq "www.marevaplaya.com")
Action: Dynamic redirect — concat("https://marevaplaya.com.mx", http.request.uri.path)
Status: 301
```

## DNS notes

- **marevaplaya.com.mx**: Google DNS — add web CNAME/A only; preserve MX records for Google Groups email.
- Snapshot MX, SPF, DKIM before any DNS changes (see DEPLOY.md).
