export type ProjectSection = { title: string; body: string[] }
export type Figure = { src: string; title: string; caption: string }
export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  title: string
  subtitle: string
  question: string
  discipline: string
  hero: string
  gallery?: Figure[]
  metrics?: Metric[]
  keywords: string[]
  tools: string[]
  context: string
  equation?: string
  equationLabel?: string
  results: string[]
  limitations: string[]
  learned: string[]
  sections: ProjectSection[]
  report?: string
  reportLabel?: string
  imageFit?: 'cover' | 'contain'
}

export type Study = {
  slug: string
  title: string
  domain: string
  image: string
  summary: string
  question: string
  tools: string[]
  metrics?: Metric[]
  gallery?: Figure[]
  sections: ProjectSection[]
  results: string[]
  limitations: string[]
  equation?: string
  equationLabel?: string
  report?: string
  imageFit?: 'cover' | 'contain'
}

export const projects: Project[] = [
  {
    slug: 'hybrid-multiphase-cfd-electrolysis',
    title: 'Hybrid Multiphase CFD for Water Electrolysis',
    subtitle: 'Validation of the MultiMorph model for confined gas–liquid flows',
    question: 'Can a hybrid Euler–Euler / VOF model reproduce gas morphology and pressure losses without resolving every generated bubble?',
    discipline: 'Master Thesis · Multiphase CFD',
    hero: '/assets/multimorph-regimes.png',
    gallery: [
      { src: '/assets/multimorph-regimes.png', title: 'Morphology across flow conditions', caption: 'Gas-volume-fraction fields showing the transition from dispersed structures to elongated channel-scale gas morphologies.' },
      { src: '/assets/multimorph-validation.png', title: 'Simulation / experiment comparison', caption: 'Qualitative comparison of predicted gas structures against reference experimental visualizations.' },
      { src: '/assets/master-pressure.png', title: 'Pressure-drop sensitivity', caption: 'Pressure-drop result used to examine the influence of near-wall resolution on the hydraulic response.' }
    ],
    metrics: [
      { value: '3', label: 'experimental reference configurations' },
      { value: '200 µm', label: 'Cubaud microchannel characteristic size' },
      { value: '≈ 1 cell', label: 'across the estimated film on the finest stable mesh' }
    ],
    keywords: ['OpenFOAM', 'Multiphase flow', 'Euler–Euler', 'VOF', 'Model validation', 'Thin films'],
    tools: ['OpenFOAM', 'ParaView', 'Python', 'Linux', 'Bash'],
    context: 'Master thesis at KIT, Institute of Fluid Mechanics. MultiMorph combines an unresolved Euler–Euler representation of small gas structures with a continuous VOF-like representation of larger interfaces. The study evaluates pressure drop, morphology, phase distribution and near-wall flow behaviour against three experimental references: Cubaud & Ho, Lafmejani et al. and Kim & Jung.',
    equation: String.raw`\Delta p = \Delta p_{\mathrm{friction}} + \Delta p_{\mathrm{acceleration}} + \Delta p_{\mathrm{gravity}}`,
    equationLabel: 'Pressure-loss decomposition used to separate the mechanisms acting in confined two-phase flow.',
    results: [
      'MultiMorph reproduces the main changes in gas morphology and can transfer accumulated dispersed gas into large continuous Taylor-like structures.',
      'The position of morphology transfer is sensitive to dispersed bubble diameter, continuous threshold and morphology-transfer time scale.',
      'The Cubaud pressure-drop trend is captured while liquid still occupies a substantial portion of the cross-section; agreement degrades in gas-rich conditions when liquid is pushed into wall films and corners.',
      'Near-wall refinement systematically changes the predicted pressure drop. Further refinement becomes numerically unstable before a formally grid-independent liquid-film solution is reached.',
      'A wall-wet boundary condition changes the near-wall phase topology but does not recover the missing film-scale momentum transport.'
    ],
    limitations: [
      'The dominant unresolved scale is the thin liquid layer near the wall, not the large gas structure itself.',
      'The finest stable mesh reaches only about one cell across the estimated film thickness, so film-scale wall shear cannot be considered grid-converged.',
      'The work validates multiphase hydrodynamics; electrochemistry is outside the model scope.'
    ],
    learned: ['Hybrid resolved/unresolved modelling', 'Validation against experiments', 'Mesh and parameter sensitivity', 'Pressure-drop physics', 'Separating modelling error from discretization error'],
    sections: [
      { title: 'Engineering problem', body: ['PEM electrolysis can generate gas structures spanning a large fraction of a flow channel while the remaining liquid near the walls is much thinner. Directly resolving every injected bubble and every liquid film is incompatible with channel-scale simulation cost.', 'The hybrid idea is to resolve only the morphology that needs an interface: small bubbles remain in an Euler–Euler field while large connected gas structures are transferred to a continuous field.'] },
      { title: 'Validation strategy', body: ['The Cubaud & Ho microchannel provides the main quantitative pressure-drop benchmark. Lafmejani is used to test morphology transfer under distributed wall gas injection. The Kim square channel brings the model closer to electrolyzer-relevant, gravity-influenced annular / Taylor flow.', 'The analysis therefore separates two questions: does the model generate the correct large-scale gas morphology, and does it also recover the near-wall momentum transport controlling pressure drop?'] },
      { title: 'Engineering challenge', body: ['At low liquid fraction the qualitative gas structure can look correct even when the pressure loss is wrong. This occurs because the gas structure spans many cells while the liquid film controlling wall shear may be of order one cell or less.', 'That distinction leads directly to the proposed extension: keep the hybrid gas description, but add an unresolved liquid-film treatment instead of attempting prohibitive wall refinement everywhere.'] }
    ],
    report: '/docs/master-thesis.pdf',
    reportLabel: 'Open Master Thesis PDF'
  },
  {
    slug: 'axial-compressor-cfd',
    title: 'Axial Compressor Rotor–Stator CFD',
    subtitle: 'Velocity triangles, incidence, rotor turning and a coupled frozen-rotor stage',
    question: 'How much turbomachinery physics can be retained in a reduced-order compressor model that stays transparent enough to interrogate?',
    discipline: 'Turbomachinery · CFD',
    hero: '/assets/compressor-coupled-stage.png',
    gallery: [
      { src: '/assets/compressor-coupled-stage.png', title: 'Coupled rotor–stator stage', caption: 'Periodic thin-annulus rotor–stator visualization coloured by velocity magnitude.' },
      { src: '/assets/compressor-wake-mixing.png', title: 'Wake transport & mixing', caption: 'Circumferential velocity-magnitude profiles reveal the strongly non-uniform rotor wake entering the stator and its progressive mixing downstream.' },
      { src: '/assets/compressor-flow-evolution.png', title: 'Rotor–stator flow evolution', caption: 'Mass-flux-weighted absolute and relative flow angles through the coupled stage highlight rotor turning and stator straightening.' }
    ],
    metrics: [
      { value: '60 m/s', label: 'design axial inlet velocity' },
      { value: '80 m/s', label: 'blade speed at mean radius' },
      { value: '186,240', label: 'cells in the coupled reference mesh' },
      { value: '≈ 3.81 kPa', label: 'coupled-stage static-pressure rise' }
    ],
    keywords: ['Velocity triangles', 'MRF', 'Rotor–stator', 'k–ω SST', 'Incidence', 'OpenFOAM'],
    tools: ['OpenFOAM v2412', 'Gmsh', 'Python', 'ParaView'],
    context: 'A deliberately reduced-order compressor-stage model. The project starts with transparent blade-to-blade rotor and stator cascades, then extends them to a single coupled periodic thin-annulus domain using steady MRF / frozen rotor. The goal is to connect classical turbomachinery equations directly to the CFD field rather than hide the physics inside a large black-box model.',
    equation: String.raw`\Delta h_0 = U\,\Delta V_\theta`,
    equationLabel: 'Euler turbomachinery equation. In this project it is used as a consistency relation derived from the velocity triangle, not as a claim of full industrial compressor performance.',
    results: [
      'At the design point, V = (60,0,0) m/s and blade speed is 80 m/s, giving W = (60,-80,0) m/s, |W| = 100 m/s and a relative inlet angle of about -53.13°.',
      'With a leading-edge metal angle near -53°, design incidence is essentially zero. Reducing axial velocity at constant blade speed moves incidence progressively off design and increases the separation tendency.',
      'The coupled MRF stage produces approximately 36.03 m/s of rotor-exit swirl and a mean post-rotor absolute flow angle of 29.21°; the stator reduces tangential velocity to about 17.96 m/s and the mean flow angle to 15.95°.',
      'The coupled solution gives a static-pressure rise of approximately 3.81 kPa and patch-integrated inlet/outlet mass-flux mismatch of about 3.0×10⁻⁶ %.',
      'The rotor wake reaching the stator remains strongly non-uniform, which is the main physical gain compared with the earlier one-way sequential workflow.'
    ],
    limitations: [
      'Steady incompressible RANS with k–ω SST; blade-passing unsteadiness is absent.',
      'The model is a reduced annulus / periodic sector, not a full transient compressor.',
      'Local absolute velocity reaches roughly Mach 0.35, so a compressible formulation would be preferable for quantitative pressure-performance claims.',
      'The final SST solution is described as quasi-converged and the report explicitly does not claim rotating-stall prediction.'
    ],
    learned: ['Reference-frame transformations', 'Incidence and turning', 'Cascade periodicity', 'MRF modelling', 'Wake–stator interaction', 'How to simplify a turbomachine without losing the core physics'],
    sections: [
      { title: 'Velocity-triangle design', body: ['At the mean radius, the relationship W = V − U directly defines the relative inlet angle seen by the rotor. The chosen design point Vx = 60 m/s and U = 80 m/s gives β ≈ −53.13°, intentionally matched to the blade leading-edge metal angle.', 'The off-design sweep changes only Vx. The blade geometry and speed remain fixed, so the resulting change in incidence is attributable directly to the velocity triangle rather than to any geometry change.'] },
      { title: 'From cascade to coupled stage', body: ['The baseline solves one rotor passage, converts the mean rotor-exit relative velocity back to the absolute frame, and then uses it to feed the stator. The second model removes this one-way coupling by solving rotor and stator simultaneously.', 'The coupled domain uses a periodic sector of 14.3239° at r = 0.2 m. The rotor is placed in an MRF cell zone while the stator remains stationary, allowing the stator to receive the actual non-uniform rotor wake.'] },
      { title: 'Interpretation', body: ['The useful result is not a single efficiency number. It is the traceable relation between incidence, turning, swirl, wake structure and static-pressure rise, together with an explicit list of what the reduced-order model cannot yet validate.'] }
    ],
    report: '/docs/axial-compressor-report.pdf',
    reportLabel: 'Open Compressor Report PDF'
  },
  {
    slug: '135-v4-engine',
    title: '135° V4 Engine — Mechanical Design & Dynamic Analysis',
    subtitle: 'Mechanism design, connecting-rod sizing, balancing and topology optimization',
    question: 'How can engine architecture, structural sizing and dynamic balancing be developed as one coherent mechanical system?',
    discipline: 'Mechanical Design · Dynamics',
    hero: '/assets/v4-engine.png',
    imageFit: 'contain',
    metrics: [
      { value: '135°', label: 'bank angle' },
      { value: '1.08 L', label: 'calculated total displacement' },
      { value: '3000 rpm', label: 'reference crankshaft speed' },
      { value: '≈94 %', label: 'peak Pilon-force reduction with the balance-shaft model' }
    ],
    keywords: ['Slider-crank', 'Balancing', 'FEM', 'Topology optimization', 'Fatigue', 'Mechanism design'],
    tools: ['CAD', 'FEA', 'Excel / analytical model', 'Python'],
    context: 'A system-level mechanical engineering project built around a custom 135° V4 architecture. The project is treated as a coupled mechanical system rather than a CAD exercise: crank phasing defines piston kinematics; piston acceleration creates reciprocating inertia forces; component mass distribution drives shaking forces and moments; connecting-rod sizing must combine combustion and inertia loads; and balancing changes the architecture through dedicated counterweights / balance-shaft masses.',
    equation: String.raw`x(\theta)=r\cos\theta+\sqrt{l^2-r^2\sin^2\theta}`,
    equationLabel: 'Slider–crank piston position. Time derivatives give piston velocity and acceleration, which feed the reciprocating inertia model.',
    results: [
      'The calculation workbook uses four cylinders, a 135° bank angle, a 35 mm crank radius and a 111 mm connecting rod, giving R/L ≈ 0.315 and a calculated total displacement of about 1.078 L.',
      'The reference dynamic calculation is performed at 3000 rpm (ω ≈ 314.16 rad/s). The model uses a piston mass of about 0.492 kg and a connecting-rod mass of about 0.590 kg; equivalent rotating and reciprocating masses are then separated for force balancing.',
      'The workbook contains a combustion design load of about 57.7 kN for the connecting-rod sizing branch, which is combined conceptually with inertia loading rather than treating the rod as a purely static part.',
      'In the simplified four-cylinder force sweep, the resultant “Tamis” component cancels essentially to numerical zero while the “Pilon” component reaches about 1.15 kN peak before compensation.',
      'The balance-shaft model uses two 80 g masses at a 17.5 mm radius, phased by 110° and rotating at twice crankshaft speed. Adding the modeled balance force reduces the peak residual Pilon-force sum to about 65 N, roughly a 94 % reduction relative to the unbalanced peak.',
      'The structural branch complements the analytical model with connecting-rod finite-element verification and topology optimization, followed by redesign rather than accepting the raw topology result as a manufacturable component.'
    ],
    limitations: [
      'The force and balance numbers come from the uploaded analytical workbook and therefore inherit its simplified rigid-body / lumped-mass assumptions.',
      'The balance result is a force-level calculation; a production engine would also require detailed crankshaft torsion, bearing loads, structural dynamics, combustion variability and full moment balancing.',
      'Final fatigue margins and topology-optimized rod stresses should only be published together with the corresponding verified FEA load cases and material data.'
    ],
    learned: ['Slider–crank kinematics', 'Equivalent rotating / reciprocating masses', 'Shaking-force and moment balancing', 'Connecting-rod load paths', 'Topology optimization with redesign', 'Linking analytical dynamics to FEA'],
    sections: [
      { title: 'Architecture & kinematics', body: ['The workbook defines a four-cylinder 135° V architecture with r = 35 mm and l = 111 mm. The resulting slider–crank geometry fixes piston displacement, velocity and acceleration as functions of crank angle.', 'Because acceleration scales with ω², the reference speed of 3000 rpm already makes inertia a first-order design load rather than a small correction to combustion force.'] },
      { title: 'Mass decomposition & connecting-rod loading', body: ['The 0.590 kg connecting rod is split into equivalent masses at the small and big ends so the mechanism can distinguish reciprocating and rotating contributions. In the workbook this gives approximately 0.688 kg reciprocating mass and 0.396 kg rotating mass for the elementary force model.', 'This decomposition is then combined with the combustion-force branch (about 57.7 kN in the current workbook) before structural verification of the rod.'] },
      { title: 'Balancing strategy', body: ['The cylinder forces are transformed from local to global coordinates and summed into the workbook quantities labelled Tamis and Pilon; the associated moments are tracked separately as Galop and Lacet.', 'For the present symmetric phasing, Tamis is essentially cancelled, whereas Pilon reaches roughly ±1.15 kN. A two-mass balancing system (2 × 80 g at 17.5 mm, 110° phase, 2× crank speed) is tuned against that component. The resulting simplified force sum leaves a peak residual of about 65 N.'] },
      { title: 'Structural design & optimization', body: ['The analytical model does not replace FEA. It provides the load cases that the connecting rod must survive. The rod is checked in tension / compression and for fatigue-sensitive stress concentration before topology optimization is used to remove low-value material.', 'The topology output is treated as a design suggestion: stiffness, manufacturability, fillets, buckling and fatigue still have to be reintroduced in the final geometry and re-verified.'] }
    ],
    report: '/docs/v4-engine-calculations.xlsx',
    reportLabel: 'Open V4 calculation workbook'
  },
  {
    slug: 'external-aerodynamics',
    title: 'External Aerodynamics — Airfoils to Complex Vehicles',
    subtitle: 'RANS studies used to build and test aerodynamic intuition',
    question: 'How do pressure field, separation, vortices and wall treatment change when moving from a canonical airfoil to vehicle-scale 3D flow?',
    discipline: 'Aerodynamics · CFD',
    hero: '/assets/aero-airfoil-aoa10.png',
    imageFit: 'contain',
    gallery: [
      { src: '/assets/aero-airfoil-aoa10.png', title: 'NACA airfoil — separated wake', caption: 'Velocity-magnitude field at angle of attack, used as the canonical case for boundary-layer and separation interpretation.' },
      { src: '/assets/aero-f1-streamlines.png', title: 'Formula 1 — flow structures', caption: 'Vehicle-scale streamline visualization highlighting interaction between floor, wheels, wings and rear wake.' },
      { src: '/assets/aero-aircraft-streamlines.png', title: 'Delta-wing aircraft — 3D wake', caption: 'Pressure and streamline visualization used to discuss vortical lift and high-angle-of-attack flow.' },
      { src: '/assets/aero-car-pressure.png', title: 'Automotive pressure field', caption: 'Surface pressure distribution as an additional vehicle-scale RANS exercise.' },
      { src: '/assets/aero-car-streamlines.png', title: 'Automotive streamlines', caption: 'Velocity-coloured streamlines showing acceleration around the body and development of the wake.' }
    ],
    metrics: [
      { value: 'Cl ≈ 0.991', label: 'NACA 0012 representative case' },
      { value: '200 km/h', label: 'Formula 1 study speed' },
      { value: 'Cl ≈ -1.02', label: 'F1 downforce coefficient sign convention' },
      { value: 'AoA 10°', label: 'delta-wing aircraft case' }
    ],
    keywords: ['NACA 0012', 'Formula 1', 'Delta wing', 'RANS', 'k–ω SST', 'y+'],
    tools: ['OpenFOAM', 'AirShaper', 'ParaView'],
    context: 'A family of RANS studies progressing from a canonical 2D airfoil to Formula 1 and delta-wing aircraft geometries. The purpose is to connect force coefficients with pressure fields, wall treatment, separation, vortices and wake structure while keeping the fidelity limits visible.',
    equation: String.raw`C_L=\frac{L}{\tfrac12\rho U_\infty^2 S},\qquad C_D=\frac{D}{\tfrac12\rho U_\infty^2 S}`,
    equationLabel: 'Non-dimensional aerodynamic coefficients used to compare cases independent of force scale.',
    results: ['NACA 0012: representative result Cl ≈ 0.991 and Cd ≈ 0.0272 at the simulated condition.', 'Formula 1 study at approximately 200 km/h: Cd ≈ 1.01 and Cl ≈ −1.02; the negative lift coefficient corresponds to downforce.', 'Delta-wing aircraft study: U∞ ≈ 60 m/s, AoA ≈ 10°, Cd ≈ 0.193 and Cl ≈ 0.681.', 'The progression from airfoil to full vehicle is used to show how local boundary-layer behaviour becomes coupled to large 3D wakes and component interaction.'],
    limitations: ['These are engineering-learning RANS investigations, not certification-grade industrial CFD.', 'Mesh resolution, wall functions and y+ strongly condition quantitative credibility.', 'Steady RANS can miss unsteady coherent structures, moving-ground / wheel effects and detailed separation dynamics depending on the case.'],
    learned: ['Pressure–force connection', 'Boundary layers and separation', 'Vortical lift', 'Downforce / drag trade-offs', 'y+ and wall-function discipline'],
    sections: [
      { title: 'NACA 0012', body: ['The airfoil is the controlled reference case. It makes angle of attack, pressure loading, lift, drag, boundary-layer development and separation interpretable before complex 3D geometry is introduced.', 'The screenshot shows the accelerated region and separated wake structure rather than only a scalar lift coefficient.'] },
      { title: 'Formula 1', body: ['The Formula 1 case adds strong aerodynamic-device interaction. Front wing, wheels, floor, diffuser and rear structures alter one another’s inflow, so the force balance must be interpreted together with the wake.', 'The primary engineering trade-off is not maximum downforce alone, but useful downforce relative to drag and flow robustness.'] },
      { title: 'Delta-wing aircraft', body: ['The aircraft case is used to study three-dimensional vortex-dominated lift at moderate-to-high angle of attack. The streamline view is useful precisely because it exposes structures that cannot be understood from Cl and Cd alone.'] }
    ]
  },
  {
    slug: 'market-time-series-ml',
    title: 'Leakage-Aware Walk-Forward Machine Learning for Bitcoin',
    subtitle: 'Three-class forecasting, strict temporal validation and realistic strategy backtesting',
    question: 'Can Bitcoin and cross-asset market data contain useful out-of-sample information once leakage, overfitting, execution delay and trading frictions are controlled?',
    discipline: 'Quantitative Research · Machine Learning',
    hero: '/assets/btc-ml-concept.png',
    imageFit: 'contain',
    metrics: [
      { value: '3,145', label: 'usable daily observations in the audited run' },
      { value: '101', label: 'engineered BTC and cross-asset features' },
      { value: '0.601', label: 'neutral / regime one-vs-rest AUC' },
      { value: '1.59%', label: 'test-period market exposure of the final long/cash strategy' }
    ],
    keywords: ['Walk-forward', 'Backtesting', 'Logistic regression', 'Gradient boosting', 'Leakage control', 'Cross-asset data'],
    tools: ['Python', 'pandas', 'scikit-learn', 'yfinance', 'Matplotlib'],
    context: 'This project began as an exploratory attempt to predict Bitcoin with technical indicators and a neural network, then evolved into a stricter quantitative-research study focused on methodology. The final audited experiment uses daily BTC data together with ETH, SPY, QQQ, GLD, VIX, the U.S. Dollar Index and the U.S. 10-year yield. From 3,145 usable observations it constructs 101 backward-looking features and asks a deliberately narrow question: after controlling for temporal leakage and realistic execution, is there any information that survives out of sample?',
    equation: String.raw`r^{\mathrm{strat}}_t = w_t\,r^{\mathrm{exec}}_t - c\,|w_t-w_{t-1}|`,
    equationLabel: 'The portfolio is evaluated on the return actually available after the signal, with transaction friction charged when the long/cash position changes. Prediction quality and economic usefulness are therefore assessed separately.',
    results: [
      'The final ensemble combines regularized multinomial logistic regression with shallow histogram gradient boosting. Models are retrained in an expanding-window walk-forward test every 30 observations.',
      'Strict test balanced accuracy is 0.3772 and log loss is 1.0955, only modestly better than three-class naive references. The project therefore does not claim a robust directional forecasting edge.',
      'The long/cash strategy returns -3.75% over the test sample, compared with -19.24% for BTC buy-and-hold and -7.97% for a simple trend baseline, but it is invested on only 1.59% of test days. The smaller loss is primarily risk avoidance, not evidence of alpha.',
      'The strongest signal is regime-related rather than directional: neutral-class AUC is 0.601, compared with 0.527 for up and 0.523 for down. Conditional directional AUC on significant moves is only 0.484.',
      'Predicted neutral probability is negatively associated with the absolute next-period BTC return, supporting the interpretation that the model is more useful at separating quiet from large-movement regimes than at choosing the sign of the move.'
    ],
    limitations: [
      'The initial train-to-validation calibration fit contains a two-row label-maturity leak because the final training labels require future opens from the validation boundary. The final walk-forward test itself applies the two-row purge correctly.',
      'All candidates in the validation threshold grid fail the minimum exposure / activity constraints, so the final 0.55 confidence and 0.10 probability-edge thresholds are fallback values rather than truly validation-optimal parameters.',
      'The strategy is active on only 10 of 629 test days, so economic conclusions are statistically fragile despite the strict backtest design.',
      'The experiment contains 101 correlated features for only a few thousand observations and no independent second final holdout after this research iteration.',
      'Daily Yahoo data, simplified fixed transaction frictions and cross-market timestamp alignment remain practical modelling limitations.'
    ],
    learned: ['Time-series leakage control', 'Walk-forward validation', 'Backtest design', 'Overfitting discipline', 'Regime detection', 'Interpreting negative results honestly'],
    sections: [
      { title: 'Research question & data', body: ['The target is not “predict the Bitcoin price”. Each daily feature row is mapped to one of three classes — down, neutral or up — using the next tradable open-to-open BTC return and a volatility-dependent neutral band.', 'The information set combines BTC price, momentum, volatility, trend, drawdown and volume features with lagged cross-asset information from ETH, equities, gold, implied volatility, the dollar and U.S. rates. Traditional-market features are shifted by one day after alignment to reduce same-session timing ambiguity.'] },
      { title: 'Leakage-aware evaluation', body: ['The 3,145 usable observations are split chronologically into 60% train, 20% validation and 20% final test. Preprocessing is fitted inside each model pipeline rather than once on the whole dataset.', 'The final test is generated with an expanding-window walk-forward procedure. Models are retrained every 30 observations, and the two most recent fitting rows are purged so labels depending on future opens are not used before they are observable.'] },
      { title: 'Models — and why not a larger neural network', body: ['The final ensemble averages probabilities from regularized multinomial logistic regression and a shallow histogram-gradient-boosting classifier. This intentionally limits capacity for a dataset with only a few thousand daily observations and many correlated predictors.', 'The neural-network diagram is retained as the project presentation graphic because the work originated as an ANN experiment. The audited final model, however, is not that network: the project evolved toward simpler, more regularized models because avoiding overfitting became more important than model complexity.'] },
      { title: 'From prediction to a backtest', body: ['A long position is opened only when the predicted up probability passes a frozen confidence threshold and exceeds the predicted down probability by a required edge. Signals based on close t are executed from the next open to the following open.', 'The backtest includes 7.5 basis points of fees and 2.5 basis points of slippage per unit of turnover and compares the strategy against both BTC buy-and-hold and a simple trend filter.'] },
      { title: 'What the experiment actually found', body: ['The model is only weakly better than naive three-class classification. Its lower portfolio loss versus buy-and-hold cannot be interpreted as alpha because it spends almost the entire test period in cash.', 'The more defensible result is structural: the model separates neutral / quiet periods better than it predicts direction. This motivates the next architecture as a hierarchy: first estimate movement regime, then estimate direction only conditionally, then size risk from confidence and volatility.'] }
    ],
    report: '/docs/bitcoin-ml-report.pdf',
    reportLabel: 'Open Bitcoin ML Report PDF'
  },
  {
    slug: 'robotic-sheet-forming-timeseries',
    title: 'Data-Driven Modelling of Robotic Incremental Sheet Forming',
    subtitle: 'Force prediction from experimental time series — Bachelor thesis',
    question: 'How can forming-force evolution be predicted when the measured signal is structured, non-stationary and repeated across multiple experiments?',
    discipline: 'Manufacturing · Data Modelling',
    hero: '/assets/bachelor-results.png',
    imageFit: 'contain',
    metrics: [
      { value: '17,000+', label: 'measurement points in the project dataset' },
      { value: '34.98', label: 'validation RMSE of the submitted weighted-average method' },
      { value: '0.784', label: 'validation R² of the submitted weighted-average method' }
    ],
    keywords: ['ARIMA', 'Time series', 'SPIF', 'Prediction', 'Optimization', 'Manufacturing'],
    tools: ['Python', 'Statistical modelling', 'SciPy / optimization'],
    context: 'Bachelor thesis at Arts et Métiers Metz on prediction of forming-force time series in robotic incremental sheet forming. The submitted work investigates ARIMA, sampling and a weighted-average prediction strategy; later follow-on work extended the multi-series idea with constrained numerical optimization.',
    equation: String.raw`\hat y(t)=\sum_{k=1}^{m} w_k\,\hat y_k(t),\qquad \sum_k w_k=1`,
    equationLabel: 'Weighted combination of reference series / predictions. In follow-on work the weights can be obtained under constraints rather than chosen ad hoc.',
    results: ['The sampling study compares equidistant points with segment averaging; segment averaging reduces the reported sampling distance metric from about 505.2 to 393.7.', 'ARIMA is tested first but is ultimately abandoned for the target force signals because the model cannot anticipate the later decay of the non-stationary series from past samples alone.', 'The final submitted weighted-average method reports validation MAE ≈ 30.39, RMSE ≈ 34.98 and R² ≈ 0.784.', 'Follow-on work extended the multi-series approach toward SARIMAX / constrained weight optimization; that extension is kept distinct from the claims of the submitted Bachelor thesis.'],
    limitations: ['The submitted final method requires knowledge of tmax because the prediction uses normalized time.', 'The reported weighted-average metrics are specific to the available experimental database and should not be interpreted as universal process accuracy.', 'Later SARIMAX / SLSQP work is a follow-on extension, not retroactively presented as part of the submitted report.'],
    learned: ['Time-series structure', 'Model selection', 'Sampling', 'Optimization', 'Data-driven manufacturing analysis'],
    sections: [
      { title: 'Process context', body: ['Robotic incremental sheet forming deforms a sheet locally with a tool following a programmed trajectory. Forming forces are measured over time and contain both process-path and material-response information.', 'The prediction problem is therefore not a generic time-series toy problem: the signal is tied to a repeated manufacturing process and can exploit information from related experiments.'] },
      { title: 'Why the model changed', body: ['The initial ARIMA route was useful for exploring autoregressive forecasting and hyperparameter selection, but the target series contains a later force decrease that cannot be inferred reliably from only its own past values.', 'The project therefore moved to a database-based weighted combination of reference series. This is less fashionable than a neural network, but better aligned with the structure of the available experiments.'] },
      { title: 'Validation', body: ['A separate validation part of the signal is used to compute MAE, MSE, RMSE and R². The final weighted-average method achieves R² ≈ 0.784 on the reported validation case.', 'The engineering lesson is the model-selection logic: choosing the method that matches the information available in the process rather than insisting on the initially selected algorithm.'] }
    ],
    report: '/docs/bachelor-thesis.pdf',
    reportLabel: 'Open Bachelor Thesis PDF'
  }
]

export const studies: Study[] = [
  {
    slug: 'neural-driving-neuroevolution',
    title: 'Neural Driving — Neuroevolution',
    domain: 'AI · Control · Optimization',
    image: '/assets/neural-driving.png',
    imageFit: 'contain',
    summary: 'A complete 2D autonomous-driving experiment built from first principles: vehicle dynamics, nine range sensors, an explicit MLP and genetic optimization of every network parameter.',
    question: 'Can an explicit neural controller learn a robust racing policy when the complete simulator and optimizer are implemented from scratch?',
    tools: ['Python', 'NumPy', 'Pygame'],
    metrics: [
      { value: '10→12→8→3', label: 'MLP architecture' },
      { value: '263', label: 'optimized scalar parameters' },
      { value: '2 → 33', label: 'two-lap finishers / 50 over 10 generations' },
      { value: '14.41 s', label: 'independently replayed two-lap champion' }
    ],
    sections: [
      { title: 'Controller & sensing', body: ['Nine range sensors plus normalized speed form the ten network inputs. The MLP outputs steering, throttle and brake. No global racing line, absolute position or hidden target direction is provided.', 'The default network contains 263 scalar weights and biases. Training uses no TensorFlow, PyTorch, automatic differentiation or backpropagation.'] },
      { title: 'Evolutionary optimization', body: ['A population of controllers is evaluated in the simulator, ranked by fitness and evolved with tournament selection, elitism, uniform crossover, Gaussian mutation and random immigrants.', 'Fitness design explicitly prevents easy exploits: ordered checkpoints must be crossed physically, reverse travel is penalized and completed races rank above incomplete trajectories.'] },
      { title: 'Verification', body: ['The project includes regression tests for vehicle dynamics, geometry, sensing, collision, checkpoint logic, serialization, elite preservation and user-interface behaviour. The final validation log records 37 passing tests.', 'The saved champion is replayed headlessly to verify that serialized parameters reproduce the stored race result rather than only the in-memory training state.'] }
    ],
    results: ['In the principal 50-car, 10-generation experiment, two-lap finishers increase from 2 to 33 while collisions fall from 48 to 17.', 'Winning two-lap time improves from about 15.49 s to 14.45 s; a later speed-deficit fitness refinement reduces the real time to about 14.41 s.', 'The strongest result is population-level robustness rather than the absolute lap time: finish rate rises from 4 % to 66 %.'],
    limitations: ['Training occurs mainly on one fixed track and spawn point; there is no held-out cross-track generalization benchmark.', 'Vehicle physics are simplified and omit a physical tyre-force model, suspension and load transfer.', 'The policy is memoryless and does not directly observe yaw rate or slip angle.', 'Genetic optimization is sample-inefficient compared with gradient-based learning where gradients are available.'],
    equation: String.raw`\theta \longmapsto J(\theta)\quad\text{without evaluating }\nabla_\theta J`,
    equationLabel: 'Neuroevolution treats the complete simulator as a black-box mapping from network parameters to scalar fitness.',
    report: '/docs/neural-driving-report.pdf'
  },
  {
    slug: 'brake-disc-thermomechanics',
    title: 'Brake Disc Thermomechanics',
    domain: 'Transient thermal + structural FEA',
    image: '/assets/brake-deformation.png',
    imageFit: 'contain',
    summary: 'Emergency-braking energy is converted into a transient heat flux, followed by mesh-sensitivity analysis and thermoelastic deformation at the end of braking.',
    question: 'How does a short high-power braking event create thermal gradients and axial thermoelastic deformation in a brake disc?',
    tools: ['ANSYS Student', 'Transient Thermal', 'Static Structural'],
    metrics: [
      { value: '100→0 km/h', label: 'braking event in 4 s' },
      { value: '≈191 kJ', label: 'energy assigned to one front disc' },
      { value: '1.18 MW/m²', label: 'initial applied heat flux' },
      { value: '72,512', label: 'elements in the finest calculated mesh' }
    ],
    gallery: [
      { src: '/assets/brake-thermal.png', title: 'Transient temperature field', caption: 'Temperature field during / after the braking event, used to track diffusion from the friction tracks into the hat.' },
      { src: '/assets/brake-deformation.png', title: 'Thermoelastic deformation', caption: 'Mapped 4 s thermal field transferred to the structural model, showing axial coning-like deformation.' }
    ],
    sections: [
      { title: 'Thermal loading', body: ['A 1500 kg vehicle braking from 100 km/h to rest in 4 s is converted into approximately 191 kJ received by one front disc after applying the front-axle share, two-disc split, rotating-mass factor and disc energy fraction.', 'The heat flux is imposed on both friction tracks and decreases linearly from approximately 1.18 MW/m² to zero over the 4 s braking interval.'] },
      { title: 'Mesh sensitivity', body: ['Five meshes are tested from 616 to 72,512 elements. At 60 s the last mesh changes are below 0.4 %, but the peak-temperature result at 4 s still changes by 3.39 % between M4 and M5.', 'The result is therefore presented as partially converged: adequate for the long-time thermal field, but still mesh-sensitive at the braking peak.'] },
      { title: 'Thermomechanical coupling', body: ['The thermal field at 4 s is mapped into a structural analysis. The model predicts coning-like axial deformation, with maximum total displacement about 3.03×10⁻⁵ m and minimum axial displacement about −1.15×10⁻⁵ m.', 'A fully fixed mounting condition is intentionally identified as a strong assumption that may overestimate thermal stress and modify the deformation shape.'] }
    ],
    results: ['The temperature peaks around the end of braking, then heat redistributes toward the disc hat while convection cools the exposed surfaces.', 'The reported transient field gives approximately 115 °C maximum temperature at 4 s and 86 °C at 60 s in the final result table.', 'Long-time thermal convergence is satisfactory, while the 4 s peak remains partially mesh-dependent.', 'The mapped structural solution shows axial coning-type deformation on the order of tens of micrometres.'],
    limitations: ['The convection coefficient is imposed as a uniform average value rather than obtained from a dedicated airflow CFD model.', 'The 4 s thermal peak is not fully mesh-converged due to the ANSYS Student problem-size limit.', 'The structural constraint is rigid and can over-constrain thermal expansion.'],
    equation: String.raw`\rho c_p\frac{\partial T}{\partial t}=\nabla\cdot(k\nabla T)+Q`,
    equationLabel: 'Transient heat equation governing the temperature field before thermoelastic mapping.',
    report: '/docs/brake-disc-report.pdf'
  },
  {
    slug: 'heated-pipe-thermomechanics',
    title: 'Heated Pipe Thermomechanics',
    domain: 'Steady thermal analysis',
    image: '/assets/heated-pipe-ansys.png',
    summary: 'A hot internal fluid drives radial conduction through a cylindrical wall, providing a compact study of convection boundary conditions and constrained thermal expansion.',
    question: 'How does a hot internal fluid create a radial temperature field and, when expansion is constrained, thermally induced stress?',
    tools: ['ANSYS', 'Steady-State Thermal', 'Structural coupling'],
    metrics: [{ value: '66.9–84.8 °C', label: 'temperature range in the uploaded thermal result' }],
    sections: [
      { title: 'Thermal model', body: ['The inner wall is driven by the hot-fluid boundary condition while heat conducts radially through the pipe thickness and is removed at the external surface.', 'The temperature field is therefore controlled by the competition between convection resistance at the fluid / wall interfaces and solid conduction resistance.'] },
      { title: 'Mechanical interpretation', body: ['For a free pipe, a nearly uniform temperature rise mainly causes expansion. Once axial or radial expansion is constrained, thermal strain α(T−T0) is converted into mechanical stress.', 'The study is useful because it isolates the thermal-boundary-condition logic before adding more complex geometry or nonlinear material behaviour.'] }
    ],
    results: ['The uploaded steady thermal result spans approximately 66.9 °C to 84.8 °C across the pipe wall.', 'The hotter inner region and cooler outer region create the radial temperature gradient that would drive differential thermal strain in a coupled structural model.'],
    limitations: ['The current portfolio evidence is a compact ANSYS study rather than a validated experimental model.', 'Stress values should only be published together with the exact mechanical constraints and material properties used.'],
    equation: String.raw`\varepsilon_{th}=\alpha\,(T-T_0)`,
    equationLabel: 'Thermal strain becomes stress only to the extent that free expansion is constrained.'
  },
  {
    slug: 'sheet-metal-interlock',
    title: 'Sheet-Metal Interlock Assembly',
    domain: 'Nonlinear FEA · Abaqus',
    image: '/assets/sheet-metal-assembly.png',
    summary: 'Large-deformation contact simulation of mechanical joining, with deformed mesh, von Mises stress and interlock-quality interpretation.',
    question: 'How do contact, plastic flow and local geometry govern whether a sheet-metal mechanical joint develops a useful interlock?',
    tools: ['Abaqus', 'Nonlinear FEA', 'Contact / friction'],
    sections: [
      { title: 'Process model', body: ['The joining operation is strongly nonlinear: the sheets undergo large plastic deformation while contact regions evolve through the forming stroke.', 'The neck thickness, sheet thickness and interlock geometry are treated as mechanical quality indicators rather than relying on the final shape alone.'] },
      { title: 'FE interpretation', body: ['The deformed mesh reveals where material is forced around the die / punch geometry, while von Mises stress highlights the zones carrying the highest equivalent stress during the joining process.', 'Parametric comparisons can then relate geometry or material changes to interlock formation, displacement and local stress concentration.'] }
    ],
    results: ['The 2D FE model captures the characteristic mechanical interlock shape and the associated highly localized deformation field.', 'The project demonstrates nonlinear contact modelling and interpretation of a manufacturing process rather than a simple static stress calculation.'],
    limitations: ['The current portfolio package contains the project visualization but not a standalone full report PDF.', 'Quantitative joining-quality conclusions should be tied to the exact material law, friction model and forming boundary conditions.']
  }
]
