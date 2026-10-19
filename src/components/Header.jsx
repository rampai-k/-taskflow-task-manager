export default function Header() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#top" aria-label="TaskFlow home">
        <span className="brand-mark" aria-hidden="true">T</span>
        <span>task<span>flow</span></span>
      </a>
      <div className="sidebar-caption">WORKSPACE</div>
      <div className="workspace-pill">
        <span className="workspace-avatar">K</span>
        <span className="workspace-copy"><strong>Personal space</strong><small>Free plan</small></span>
      </div>
      <div className="sidebar-note">
        <span className="note-icon" aria-hidden="true">✦</span>
        <p>A little progress each day adds up to big results.</p>
      </div>
      <div className="sidebar-footer">
        <span className="avatar">KR</span>
        <span className="profile-copy"><strong>Katlego Rampai</strong><small>My workspace</small></span>
      </div>
    </aside>
  );
}
