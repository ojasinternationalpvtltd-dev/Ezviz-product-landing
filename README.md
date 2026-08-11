# EZVIZ H6c Pro COD Funnel

A Next.js App Router sales funnel with a product page (`/`), checkout (`/checkout`), thank-you page (`/thank-you`), and secure server-side order endpoint (`POST /api/order`). It uses Tailwind CSS, Google Sheets, and SMTP email.

## Order flow

The product page sends selected product, quantity, and price in the checkout URL. The checkout validates customer details and posts to `/api/order`. The API creates an order ID, appends the row to Google Sheets, sends the business notification and customer confirmation emails, and only then returns success. The browser redirects to the thank-you page after that success response.

## Setup

1. Run `npm install`, then copy `.env.example` to `.env.local` and fill every required value.
2. Run `npm run dev`, open `http://localhost:3000`, place a test order, and verify the row plus both emails.
3. Deploy to Vercel, then add the same environment variables in **Project Settings → Environment Variables** and redeploy.

## Google Sheets

1. Create a Google Sheet and a tab named `Orders` (or set `GOOGLE_SHEET_TAB_NAME`).
2. Put this exact header row in row 1: `Order ID`, `Date & Time`, `Customer Name`, `Phone Number`, `Email Address`, `Exact Location`, `Product Name`, `Quantity`, `Price Per Piece`, `Total Price`, `Payment Method`, `Order Status`, `Notes`.
3. Create a Google Cloud service account, enable the Google Sheets API, and create/download its JSON key. Copy `client_email` to `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `private_key` to `GOOGLE_PRIVATE_KEY`. Keep the quotes and `\n` escapes when using `.env.local` or Vercel.
4. Share the spreadsheet with the service account email as an **Editor**.
5. Copy the Sheet ID from the URL segment between `/d/` and `/edit` into `GOOGLE_SHEET_ID`.
6. In Google Sheets, select the header row and use **Data → Create a filter**. For the Order Status column, choose **Data → Data validation → Dropdown** and add: `New Order`, `Order Confirmed`, `Order Ongoing`, `Delivered`, `Cancelled`.

## Email

Configure any SMTP provider. For Gmail, use `smtp.gmail.com`, port `587`, your Gmail address as `SMTP_USER`, and a Google App Password as `SMTP_PASS` (not your normal password). Set `BUSINESS_EMAIL` to the inbox that receives order alerts, and set `EMAIL_FROM` to a valid sending identity, for example `EZVIZ <orders@yourdomain.com>`.

`EMAIL_SERVICE_API_KEY` is included for future provider changes; the shipped implementation uses SMTP, so it is not consumed.

## Production notes

Never expose `.env.local`, service-account JSON, or SMTP passwords to the client. The endpoint is server-only. Configure `NEXT_PUBLIC_SITE_URL` and `FRONTEND_URL` to the deployed site URL. If you need a dedicated API in the future, restrict its CORS origin to `FRONTEND_URL`.
