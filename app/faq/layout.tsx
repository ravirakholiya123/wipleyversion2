import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Wipely - Frequently Asked Questions',
  description: 'Find answers to common questions about Wipely\'s cleaning services in Melbourne. Learn about pricing, booking, service areas, and our satisfaction guarantee.',
  keywords: 'cleaning faq, wipely questions, cleaning service melbourne faq, booking questions, cleaning service pricing',
  openGraph: {
    title: 'Frequently Asked Questions - Wipely Melbourne',
    description: 'We\'ve got answers! Find quick solutions to common questions about our professional cleaning services.',
    type: 'website',
    url: 'https://wipely.au/faq',
    siteName: 'Wipely',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wipely FAQ - Your Questions Answered',
    description: 'If you\'ve got questions, we\'ve got you covered. Browse our comprehensive FAQ.',
  },
  alternates: {
    canonical: 'https://wipely.au/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqData = [
    { question: 'What areas do you service?', answer: 'We proudly serve Melbourne and surrounding suburbs. Just enter your postal code on the booking page to check availability! Our service area includes the CBD and extends to most metropolitan Melbourne suburbs.' },
    { question: 'Do I need to provide cleaning products or equipment?', answer: 'Not at all! We bring our own professional-grade supplies and equipment. However, if you prefer we use specific products (perhaps for allergies or personal preference), just let us know during booking and we\'ll be happy to accommodate.' },
    { question: 'How can I book a cleaning service?', answer: 'Just head to our Book Page, select your service type, fill in a few details about your home and preferences, and submit your request, no payment needed upfront. We\'ll contact you within 24 hours to confirm details and schedule your clean.' },
    { question: 'What if I\'m not happy with the service?', answer: 'Your satisfaction is our top priority. If something\'s not right, contact us within 24 hours and we\'ll make it right, no fuss. We offer a satisfaction guarantee and will return to re-clean any areas that don\'t meet your expectations.' },
    { question: 'Are your cleaners insured and background-checked?', answer: 'Yes, every cleaner is fully insured and has passed a detailed background check before joining the Wipely team. We also provide ongoing training to ensure consistent, professional service.' },
    { question: 'Can I reschedule or cancel a booking?', answer: 'Absolutely. Just contact us at least 24 hours in advance and we\'ll be happy to help reschedule or cancel your booking. We understand that life happens and we\'re flexible with changes.' },
    { question: 'Do you offer one-off cleaning services?', answer: 'Yes, our spring/deep cleans and move-in/move-out cleans are perfect for a one-time refresh. You can also book any of our services as a one-off without committing to regular cleaning.' },
    { question: 'Can I request extra services like oven cleaning or window washing?', answer: 'You sure can! We offer a wide list of optional extras including oven cleaning, carpet steam cleaning, upholstery care, and more. Just select the ones you need on the booking form and we\'ll take care of the rest.' },
    { question: 'How much do your services cost?', answer: 'Our pricing depends on the size of your home, type of service, and any extras you choose. Regular house cleaning starts from around $120, while specialized services like end-of-lease cleaning start from $280. Use our booking form for an instant estimate.' },
    { question: 'Do I need to be home during the cleaning?', answer: 'Not necessarily! Many of our clients provide access and go about their day. We\'re fully insured and bonded for your peace of mind. However, you\'re always welcome to be home if you prefer.' },
    { question: 'How long does a typical cleaning take?', answer: 'This depends on the size of your home and type of service. Regular house cleaning typically takes 2-4 hours, while deep cleans or end-of-lease cleaning can take 4-8 hours. We\'ll provide an estimated timeframe when you book.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, bank transfers, and cash. Payment is due after the service is completed to your satisfaction. We\'ll send you an invoice via email for your records.' },
    { question: 'Do you clean on weekends and public holidays?', answer: 'Yes, we offer cleaning services 7 days a week, including weekends. Public holiday availability may vary, and there may be a small surcharge for holiday bookings. Contact us to check availability for your preferred date.' },
    { question: 'What happens if something gets damaged during cleaning?', answer: 'While rare, accidents can happen. We\'re fully insured and will take full responsibility for any damage caused by our team. We\'ll work with you and our insurance provider to resolve any issues quickly and fairly.' },
    { question: 'Can you work around my pets?', answer: 'Absolutely! We love pets and are experienced in working around them. Just let us know about your furry friends when booking so we can take any necessary precautions and ensure their comfort during the clean.' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
