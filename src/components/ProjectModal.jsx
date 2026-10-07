import React, { useEffect, useState } from "react";

function ProjectModal({ project, onClose }) {
    const [activeTab, setActiveTab] = useState("overview");

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    if (!project) return null;

    return (
        <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="project-modal-header">
                    <h2>{project.name}</h2>
                    <button className="project-modal-close" onClick={onClose} aria-label="Close dialog">
                        ✕
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div className="project-modal-tabs">
                    <button
                        type="button"
                        className={`project-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        <span className="tab-icon">≡</span>
                        <span className="tab-label">Overview & README</span>
                    </button>
                    <button
                        type="button"
                        className={`project-tab-btn ${activeTab === "architecture" ? "active" : ""}`}
                        onClick={() => setActiveTab("architecture")}
                    >
                        <span className="tab-icon">◈</span>
                        <span className="tab-label">Architecture & Diagram</span>
                    </button>
                    <button
                        type="button"
                        className={`project-tab-btn ${activeTab === "gallery" ? "active" : ""}`}
                        onClick={() => setActiveTab("gallery")}
                    >
                        <span className="tab-icon">⊞</span>
                        <span className="tab-label">Previews & Gallery</span>
                    </button>
                </div>

                {/* Body Content based on Tab */}
                <div className="project-modal-body">
                    {activeTab === "overview" && (
                        <div className="tab-pane">
                            <section className="modal-section">
                                <h4>About The Project</h4>
                                <p className="modal-desc">{project.detailedDescription || project.description}</p>
                            </section>

                            <section className="modal-section">
                                <h4>Key Highlights & Features</h4>
                                <ul className="modal-feature-list">
                                    {(project.detailedHighlights || project.highlights).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="modal-section">
                                <h4>Tech Stack & Tools</h4>
                                <div className="modal-tag-cloud">
                                    {project.techStack.split(",").map((t, idx) => (
                                        <span key={idx} className="modal-tag">{t.trim()}</span>
                                    ))}
                                </div>
                            </section>

                            {(project.liveUrl || project.githubUrl) && (
                                <section className="modal-section modal-actions">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="primary-button modal-btn"
                                        >
                                            View Source Code ↗
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="secondary-button modal-btn"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                </section>
                            )}
                        </div>
                    )}

                    {activeTab === "architecture" && (
                        <div className="tab-pane">
                            <section className="modal-section">
                                <h4>System Architecture & Workflow</h4>
                                <p className="modal-desc">
                                    {project.architectureDescription || "High-level architectural workflow and data pipeline breakdown."}
                                </p>
                            </section>

                            {project.architectureImage && (
                                <section className="modal-section architecture-diagram-container">
                                    <h4>Architecture Diagram</h4>
                                    <div className="architecture-diagram-wrapper">
                                        <a href={project.architectureImage} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={project.architectureImage}
                                                alt={`${project.name} Architecture Diagram`}
                                                className="architecture-img"
                                            />
                                        </a>
                                        <p className="architecture-img-hint">Click image to inspect full high-resolution diagram ↗</p>
                                    </div>
                                </section>
                            )}

                            {project.workflowSteps && project.workflowSteps.length > 0 ? (
                                <div className="architecture-flowchart">
                                    {project.workflowSteps.map((step, idx) => (
                                        <React.Fragment key={idx}>
                                            <div className="flow-step">
                                                <span className="flow-step-num">{idx + 1}</span>
                                                <strong>{step.title}</strong>
                                                <p>{step.desc}</p>
                                            </div>
                                            {idx < project.workflowSteps.length - 1 && (
                                                <div className="flow-arrow">➔</div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            ) : (
                                <div className="architecture-flowchart">
                                    <div className="flow-step">
                                        <span className="flow-step-num">1</span>
                                        <strong>Client Layer</strong>
                                        <p>React Frontend & Responsive UI State</p>
                                    </div>
                                    <div className="flow-arrow">➔</div>
                                    <div className="flow-step">
                                        <span className="flow-step-num">2</span>
                                        <strong>API & Auth</strong>
                                        <p>JWT, REST Endpoints & RBAC Security</p>
                                    </div>
                                    <div className="flow-arrow">➔</div>
                                    <div className="flow-step">
                                        <span className="flow-step-num">3</span>
                                        <strong>Business Logic</strong>
                                        <p>Service Controllers & Event Telemetry</p>
                                    </div>
                                    <div className="flow-arrow">➔</div>
                                    <div className="flow-step">
                                        <span className="flow-step-num">4</span>
                                        <strong>Database Layer</strong>
                                        <p>PostgreSQL / Persistent Storage</p>
                                    </div>
                                </div>
                            )}

                            {project.architecturePoints && (
                                <div className="modal-section">
                                    <h4>Design Principles</h4>
                                    <ul className="modal-feature-list">
                                        {project.architecturePoints.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "gallery" && (
                        <div className="tab-pane">
                            <section className="modal-section">
                                <h4>Visuals & User Interface Previews</h4>
                                <p className="modal-desc">
                                    Screenshots and graphical demonstrations of {project.name}.
                                </p>
                                {project.videoUrl && (
                                    <a
                                        href={project.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondary-button modal-btn"
                                        style={{ display: "inline-block", marginTop: "12px" }}
                                    >
                                        ▶ Watch
                                    </a>
                                )}
                            </section>

                            <div className="modal-gallery-grid">
                                {project.gallery && project.gallery.length > 0 ? (
                                    project.gallery.map((item, idx) => (
                                        <div key={idx} className="gallery-item-card">
                                            {item.image ? (
                                                <a
                                                    href={item.image}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="gallery-item-link"
                                                    title="Click to view full image"
                                                >
                                                    <img src={item.image} alt={item.caption || project.name} loading="lazy" />
                                                    <span className="gallery-zoom-badge">🔍 Zoom</span>
                                                </a>
                                            ) : (
                                                <div className="gallery-mock-preview">
                                                    <span className="mock-icon">{item.icon || "💻"}</span>
                                                    <span>{item.caption || "Interface View"}</span>
                                                </div>
                                            )}
                                            <p className="gallery-caption">{item.caption}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="empty-gallery-state">
                                        <p>No images uploaded yet. You can attach project screenshots directly in projects data.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default ProjectModal;
