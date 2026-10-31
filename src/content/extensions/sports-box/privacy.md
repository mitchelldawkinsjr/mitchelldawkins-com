Sports Box is a browser extension that opens a multiview dashboard so you can watch stream pages you choose in one window. This policy describes what the extension does and does not do with your data.

## Data we collect

The extension does not transmit, sell, or share personal data with the developer. There is no account, no analytics, and no advertising. Nothing you type into the dashboard is sent to a server operated by the developer.

Layouts, stream URLs, opacity settings, and scoreboard filters stay in your browser's local storage on this device. They are not synced to a Google account.

## What the extension accesses and why

- **Pages you put in a panel.** The dashboard can load whatever stream URL you paste, so the extension has to be able to run on those sites. It looks at video and audio elements, and at the player frame, so mute, volume, and Fill video can reach the picture you are watching. It does not read passwords, cookies, or form fields. It does not keep a list of pages you visit. A page is left alone unless it is one of your panels or the dashboard sends a command into that frame.
- **Frame-blocking headers (`declarativeNetRequest`).** Many stream sites refuse to appear inside a frame. On subframe requests only, the extension removes `X-Frame-Options` and `Content-Security-Policy` so the page you chose can render in a panel. It does not read the response, and it does not change those headers on top-level pages you browse normally.
- **Tab capture (`tabCapture`).** If you pop a panel out into its own window, the extension can mirror that window's picture and sound back into the dashboard. The mirror stays in the browser. It is not saved as a file and it is not uploaded.
- **Tabs, windows, and frame lookup.** These open the dashboard, mute a tab, place an optional docked window, and find the player frame inside a panel. Frame lookup is not a browsing history.
- **Scripting.** Mute and Fill video helpers are part of the extension package. They are injected into a panel frame when you use those controls.

## Optional scoreboard key

Live scores on the ticker come from public ESPN scoreboard pages. Those requests do not include your stream URLs or layouts.

If you paste a CollegeFootballData API key, it stays in local storage on this device and is sent only to `api.collegefootballdata.com` with the scoreboard requests that key authorizes. The developer never receives the key. Leave the field empty and that request is not made.

## Phone remote

The phone remote is optional. It talks to a small hub you run on your own computer, on your own Wi-Fi. The QR code is drawn on this device. The PIN and the local network address are not sent to the developer or to a QR-code service.

## Limited use

Information the extension reads from a stream page is used only to show, mute, and crop that panel. It is not used for advertising, credit, or lending. It is not sold. It is not sent to the developer.

## Third parties

A stream site you load applies its own privacy policy to content played from its servers. Sports Box does not proxy or store those streams. ESPN, and CollegeFootballData only when you supply a key, receive the scoreboard requests described above.

## Children's privacy

The extension is not directed at children under 13, and it does not knowingly collect personal data from anyone.

## Changes to this policy

If the extension's data practices change, this page will be updated and the date on the homepage listing will change with it.

## Contact

Questions about this policy: [hello@mitchelldawkins.com](mailto:hello@mitchelldawkins.com), or an issue at [github.com/mitchelldawkinsjr/sports-box/issues](https://github.com/mitchelldawkinsjr/sports-box/issues).
