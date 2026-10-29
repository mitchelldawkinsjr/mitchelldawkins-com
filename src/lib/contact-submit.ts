export const CONTACT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxPy3NIVylh-RsgImrNqRgVMgBLl8S97ROAjket4RJIzswazAeO09yvlsv-tP30pAEHfw/exec';

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Posts to the Google Apps Script that emails contact submissions.
 * no-cors is required for that script; the response body cannot be read.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
