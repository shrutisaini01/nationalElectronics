function StoreLocation() {
  return (
    <div className="rounded-2xl overflow-hidden aspect-video border border-neutral-800 shadow-2xl">
      <iframe
        title="National Electronics Store"
        src="https://www.google.com/maps/embed?pb=!4v1759575337912!6m8!1m7!1sRtSx7wBv7C40sgZjiupamQ!2m2!1d29.94790102338025!2d77.80414616984541!3f69.95514786595903!4f-7.462548715129529!5f0.7820865974627469" 
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default StoreLocation;