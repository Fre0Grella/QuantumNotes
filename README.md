# Quantum Computing — Interactive Notes
**Lorenzo Valentini · Prof. M. Chiani · Università di Bologna · 2026**

Self-contained interactive notes covering linear algebra, quantum mechanics, entanglement and quantum circuits — with live visualisations, exercises and a drag-and-drop circuit simulator.

---

## 📁 File Structure

```
quantum-notes/
│
├── index.html                        ← Landing page / home (start here)
├── sandbox.html                      ← Circuit Sandbox (drag-and-drop editor)
│
├── 1-BasicAlgebraForQuantum.html     ← Note 01: Linear Algebra for Quantum
├── 2-QuantumBasics.html              ← Note 02: Quantum Basics
├── 3-CompositeQuantumSystems.html    ← Note 03: Composite Quantum Systems
├── 4-QuantumCircuits.html            ← Note 04: Quantum Circuits
│
├── q-notes.css                       ← Unified stylesheet (shared by all pages)
├── q.css                             ← Q.js circuit library styles
├── q.js                              ← Q.js quantum circuit simulator library
│
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

```bash
git init
git add .
git commit -m "Initial commit: Quantum Computing Interactive Notes"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/quantum-notes.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/quantum-notes/
```

### Step 3 — Verify

After a minute or two, visit the URL above. The landing page should appear with the sidebar navigation.

---

## 🔧 Local Development

No build step required — these are plain HTML/CSS/JS files.

```bash
# Option A: Python built-in server
python3 -m http.server 8080
# → open http://localhost:8080

# Option B: Node.js
npx serve .
# → open http://localhost:3000

# Option C: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## 📚 Contents

| Note | File | Topics |
|------|------|--------|
| 01 | `1-BasicAlgebraForQuantum.html` | Vectors, Complex Numbers, Inner Product, Dirac Notation, Qubit, Measurement, Matrices, Eigenvalues |
| 02 | `2-QuantumBasics.html` | QM Postulates, Pauli Matrices, Bloch Sphere, Quantum Gates (H X Y Z S T Rx Ry Rz), Basis Change |
| 03 | `3-CompositeQuantumSystems.html` | Tensor Products, Entanglement, Bell States, CHSH Game, CNOT/CZ/SWAP, Density Matrix |
| 04 | `4-QuantumCircuits.html` | Universality, Oracles, Parallelism, No-Cloning, Teleportation, Tomography |
| — | `sandbox.html` | Interactive drag-and-drop circuit editor with live outcomes |

---

## ⚛️ Q.js Circuit Library

The circuit sandbox uses [Q.js](https://quantumjavascript.app/) by Stewart Smith (MIT License).
The files `q.js` and `q.css` must stay in the same folder as the HTML pages.

---

## 📄 License

Notes content: © Lorenzo Valentini 2026, Università di Bologna.  
Q.js library: © Stewart Smith 2019–2020, MIT License.
