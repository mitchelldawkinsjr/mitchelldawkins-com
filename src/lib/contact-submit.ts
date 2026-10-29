export const CONTACT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxPy3NIVylh-RsgImrNqRgVMgBLl8S97ROAjket4RJIzswazAeO09yvlsv-tP30pAEHfw/exec';

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Posts to the Apps Script that appends a spreadsheet row.
 * text/plain is required: application/json is blocked by the browser, and the
 * script only emails through IFTTT after that row exists.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  if (!response.ok || !text.includes('"status":"success"')) {
    throw new Error('Submission was not accepted');
  }
}
