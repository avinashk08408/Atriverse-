const DESTINATION = 'attiiverseofficial@gmail.com'

const COMMON_FIELDS = [
  { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Female', 'Male', 'Non-binary', 'Prefer not to say', 'Other'] },
  { name: 'age', label: 'Age', type: 'number', placeholder: 'Your age', required: true, min: 13, max: 100 },
]

function ContactForm({ kind = 'General Collaboration', compact = false }) {
  const fields = kind === 'Join ATTI VERSE'
    ? [
        { name: 'name', label: 'Full name', placeholder: 'Your full name', type: 'text', required: true },
        { name: 'email', label: 'Email address', placeholder: 'you@email.com', type: 'email', required: true },
        { name: 'phone', label: 'Phone number', placeholder: '+91 — — —', type: 'tel' },
        { name: 'city', label: 'City / location', placeholder: 'Where are you based?', type: 'text' },
        { name: 'identity', label: 'Who are you?', placeholder: 'Student, professional, creator, performer...', type: 'text', required: true },
        ...COMMON_FIELDS,
      ]
    : kind === 'Organize an Event'
      ? [
          { name: 'name', label: 'Contact name', placeholder: 'Your name', type: 'text', required: true },
          { name: 'email', label: 'Email address', placeholder: 'you@email.com', type: 'email', required: true },
          { name: 'organization', label: 'Organization / institution', placeholder: 'College, company or organization', type: 'text', required: true },
          { name: 'eventName', label: 'Event name', placeholder: 'Name of the event', type: 'text', required: true },
          { name: 'eventDate', label: 'Preferred event date', type: 'date' },
          { name: 'guestCount', label: 'Expected audience', placeholder: 'Approximate guest count', type: 'text' },
          ...COMMON_FIELDS,
        ]
      : [
          { name: 'name', label: 'Name', placeholder: 'Your name', type: 'text', required: true },
          { name: 'email', label: 'Email address', placeholder: 'you@email.com', type: 'email', required: true },
          ...COMMON_FIELDS,
        ]

  return (
    <form className={`contact-form ${compact ? 'contact-form--compact' : ''}`} action={`https://formsubmit.co/${DESTINATION}`} method="POST">
      <input type="hidden" name="_subject" value={`ATTI VERSE — ${kind}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="form_type" value={kind} />
      <div className="contact-form__grid">
        {fields.map((field) => <label key={field.name} className="contact-form__field"><span>{field.label}{field.required ? ' *' : ''}</span>{field.type === 'select' ? <select name={field.name} required={field.required} defaultValue=""><option value="" disabled>Select {field.label.toLowerCase()}</option>{field.options.map((option) => <option key={option} value={option}>{option}</option>)}</select> : <input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} min={field.min} max={field.max} />}</label>)}
        <label className="contact-form__field contact-form__field--wide"><span>{kind === 'Join ATTI VERSE' ? 'Tell us about yourself' : kind === 'Organize an Event' ? 'Event brief and requirements' : 'Message'} *</span><textarea name="message" placeholder={kind === 'General Collaboration' ? 'Tell us what you are building...' : 'Share the details so our team can understand the opportunity...'} required rows={compact ? 5 : 6} /></label>
      </div>
      <button type="submit" className="btn btn--gold contact-form__submit">{kind === 'Join ATTI VERSE' ? 'Send Application' : kind === 'Organize an Event' ? 'Send Event Brief' : 'Send Message'} <span>↗</span></button>
      <p className="contact-form__note">Your message will be sent to {DESTINATION}.</p>
    </form>
  )
}

export default ContactForm
