Film Room Downloader is a browser extension that helps coaches save video from their own logged-in Hudl session for offline review. This policy describes what the extension does and does not do with your data.

## Data we collect

The extension does not transmit, sell, or share any data with the developer or any third party. There is no account, no analytics, and no remote logging. Information it reads from Hudl is handled only on your device, as described below. Nothing is sent to a server operated by the developer.

## What the extension accesses and why

- **Network requests on Hudl tabs (`webRequest`).** After you agree in the popup, the extension observes outgoing network requests only on `*.hudl.com` to detect when the page loads a video (an HLS/DASH manifest or a progressive video file). Only the request URL is read, and only to classify it as video. Request contents, response bodies, and any non-video requests are not inspected. It does not keep a history of pages you visit, and it does not see traffic on any other site.
- **Page content on Hudl (`scripting` / content script).** After you agree, a script reads the play labels Hudl is already showing (play number, down, distance, formation, result, quarter, and any other text in that row, which may include names). This is used only to name the downloaded file and to write a `.meta.json` sidecar next to it. During Download All it also clicks Hudl's next-clip control so each clip is saved with its own labels. This data stays on your device.
- **Downloads (`downloads`).** Video files and their sidecars are saved through Chrome's own download manager to your Downloads folder. The extension never uploads them anywhere.
- **Storage (`storage`).** Remembers only that you accepted the in-popup disclosure, so you are not asked again. No play data or video addresses are stored this way, and nothing is synced to a Google account or a developer server.

## When this starts

The extension does not read video addresses or page labels until you open it and choose **Agree and continue**. That choice is the disclosure for this access. You can remove the extension at any time in `chrome://extensions`, which deletes the stored choice.

## Limited use

Use of information from Hudl pages is limited to the single purpose of saving the video you choose and naming that file for offline review. The extension does not use this information for advertising, credit, lending, or any purpose unrelated to that. It does not sell or transfer it. No person at the developer reads it, because it is never received.

## Your account and credentials

The extension never sees, handles, or stores your Hudl password or any login credentials. Downloads use your existing browser session (cookies) automatically, exactly as if you had downloaded the file yourself from the page.

## Where data lives

Everything the extension reads or saves stays on your local device. Video files, `.meta.json` sidecars, and any telestration notes you create in the Film Room viewer are all local files. Nothing is sent to a server operated by the developer.

## Third parties

The extension interacts only with Hudl (the site you are already logged into) and Chrome's own download manager. It does not integrate with any other third-party service.

## Children's privacy

The extension is intended for coaches and team staff managing their own film. It does not knowingly collect any data from anyone, including children.

## Changes to this policy

If the extension's data practices change, this page will be updated and the "Last updated" date above will reflect the change.

## Contact

Questions about this policy: [hello@mitchelldawkins.com](mailto:hello@mitchelldawkins.com), or an issue at [github.com/mitchelldawkinsjr/hudl-download/issues](https://github.com/mitchelldawkinsjr/hudl-download/issues).
