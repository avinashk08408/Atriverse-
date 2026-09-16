const DESTINATION = 'attiiverseofficial@gmail.com'

function ContactForm({ kind = 'General Collaboration', compact = false }) {
  const fields = kind === 'Join ATTI VERSE'
    ? [
        ['name', 'Full name', 'Your full name', 'text', true],
        ['email', 'Email address', 'you@email.com', 'email', true],
        ['phone', 'Phone number', '+91 — — —', 'tel', false],
        ['city', 'City / location', 'Where are you based?', 'text', false],
        ['discipline', 'Area of interest', 'Performance, design, production...', 'text', true],
        ['experience', 'Experience / portfolio link', 'Instagram, Drive, website or brief summary', 'text', false],
      ]
    : kind === 'Organize an Event'
      ? [
          ['name', 'Contact name', 'Your name', 'text', true],
          ['email', 'Email address', 'you@email.com', 'email', true],
          ['organization', 'Organization / institution', 'College, company or organization', 'text', true],
          ['eventName', 'Event name', 'Name of the event', 'text', true],
          ['eventDate', 'Preferred event date', '', 'date', false],
          ['guestCount', 'Expected audience', 'Approximate guest count', 'text', false],
        ]
      : [
          ['name', 'Name', 'Your name', 'text', true],
          ['email', 'Email address', 'you@email.com', 'email', true],
        ]

  return (
    <form className={`contact-form ${compact ? 'contact-form--compact' : ''}`} action={`https://formsubmit.co/${DESTINATION}`} method="POST">
      <input type="hidden" name="_subject" value={`ATTI VERSE — ${kind}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="form_type" value={kind} />
      <div className="contact-form__grid">
        {fields.map(([name, label, placeholder, type, required]) => <label key={name} className="contact-form__field"><span>{label}{required ? ' *' : ''}</span><input name={name} type={type} placeholder={placeholder} required={required} /></label>)}
        <label className="contact-form__field contact-form__field--wide"><span>{kind === 'Join ATTI VERSE' ? 'Tell us about yourself' : kind === 'Organize an Event' ? 'Event brief and requirements' : 'Message'} *</span><textarea name="message" placeholder={kind === 'General Collaboration' ? 'Tell us what you are building...' : 'Share the details so our team can understand the opportunity...'} required rows={compact ? 5 : 6} /></label>
      </div>
      <button type="submit" className="btn btn--gold contact-form__submit">{kind === 'Join ATTI VERSE' ? 'Send Application' : kind === 'Organize an Event' ? 'Send Event Brief' : 'Send Message'} <span>↗</span></button>
      <p className="contact-form__note">Your message will be sent to {DESTINATION}.</p>
    </form>
  )
}

export default ContactForm
