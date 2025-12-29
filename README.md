DNS / GitHub Pages setup for mkprowrites.com

This repository is configured to publish the site at a custom domain: mkprowrites.com. The repository contains a CNAME file with the domain name.

DNS configuration (recommended):

1) Add A records for the root/apex domain (@) to point to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2) Add a CNAME record for the www subdomain:
   - Host/Name: www
   - Type: CNAME
   - Value/Target: makonitafadzwa0-cpu.github.io

3) If your DNS provider supports ALIAS or ANAME records, you can use an ALIAS/ANAME for the root domain pointing to makonitafadzwa0-cpu.github.io instead of multiple A records.

4) After updating DNS, go to this repository's Settings -> Pages (or Pages section in repository settings) and set the custom domain to:
   mkprowrites.com

5) Enable "Enforce HTTPS" once the certificate has been issued. It can take some time (usually up to an hour, sometimes longer) for the TLS certificate to be provisioned. DNS propagation may take up to 48 hours in some cases.

Verification and troubleshooting:
- Use dig or nslookup to confirm the A records and CNAME:
  dig +short mkprowrites.com A
  dig +short www.mkprowrites.com CNAME

- If you see issues after DNS changes, ensure there are no conflicting DNS records (for example, an A record for www while also having a CNAME for www), and clear any CDN or local caches.

Notes:
- The repository already includes a CNAME file with the custom domain (CNAME).
- If you prefer a different configuration (only CNAME, different target, or additional guidance), tell me what you'd like and I can update these files.
