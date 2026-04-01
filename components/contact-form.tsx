export function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-grid">
        <label>
          <span>Nom</span>
          <input type="text" name="name" placeholder="Votre nom" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="vous@entreprise.fr" />
        </label>
        <label>
          <span>Entreprise</span>
          <input type="text" name="company" placeholder="Nom de votre structure" />
        </label>
        <label>
          <span>Sujet</span>
          <input type="text" name="subject" placeholder="Transformation, architecture, modernisation..." />
        </label>
        <label className="form-grid__full">
          <span>Votre besoin</span>
          <textarea name="message" rows={6} placeholder="Décrivez votre contexte, vos enjeux et votre objectif." />
        </label>
      </div>
      <button type="submit" className="button button--primary">Envoyer la demande</button>
    </form>
  );
}
