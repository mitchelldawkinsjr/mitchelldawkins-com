import type { Metadata } from 'next';
import AiAssistantQuestionnaire from '@/components/consulting/AiAssistantQuestionnaire';
import { site } from '@/lib/site';

const description =
  'A short discovery questionnaire for an assistant that helps with business email and appointment scheduling.';

export const metadata: Metadata = {
  title: 'AI Assistant Questionnaire',
  description,
  alternates: { canonical: `${site.url}/consulting/ai-assistant` },
  openGraph: {
    title: 'AI Assistant Questionnaire',
    description,
    url: `${site.url}/consulting/ai-assistant`,
    type: 'website',
  },
};

export default function AiAssistantQuestionnairePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AiAssistantQuestionnaire />
    </div>
  );
}
