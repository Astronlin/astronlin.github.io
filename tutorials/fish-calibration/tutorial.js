'use strict';
document.querySelectorAll('pre').forEach(pre => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'copy-code'; button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy this code block');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.querySelector('code').textContent);
      button.textContent = 'Copied';
      document.querySelector('#copy-status').textContent = 'Code copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy'; }, 1600);
    } catch (_) {
      button.textContent = 'Select code';
      const selection = window.getSelection(), range = document.createRange();
      range.selectNodeContents(pre.querySelector('code')); selection.removeAllRanges(); selection.addRange(range);
      document.querySelector('#copy-status').textContent = 'Code selected. Use your copy shortcut.';
    }
  });
  pre.append(button);
});

const viewerImages = {
  tsys: {src:'viewer-tsys.png', alt:'Actual FISH Qt Tsys calibration page for Sun17_A_01 M01 extract row 0 (original row 1040), with ON-OFF and Tpsr smoothing controls.', caption:'Tsys calibration: compare raw and filtered Tpsr, then adjust the two smoothing controls. Click the screenshot to enlarge it.', description:'The upper-right panel compares raw and smoothed Tpsr. The lower-right panel shows the smoothed curve separately. Both summarize the temperature reference used for the selected spectrum.'},
  apply: {src:'viewer-apply.png', alt:'Actual FISH Qt Apply calibration page for Sun17_A_01 M01 extract row 0 (original row 1040), with raw SCI counts above calibrated AA temperature.', caption:'Apply calibration: raw counts above and calibrated temperature below, for the same selected timestamp and polarization. Click the screenshot to enlarge it.', description:'The upper spectrum is SCI backend counts; the lower spectrum is calibrated temperature in K. These are the same selected observation in different units, not two independent observations. The gray band marks protected H I; Detected RFI (0) reports the current search result, not proof that all channels are clean. These viewer spectra use LSRK velocities; the standalone calibration-only example uses topocentric velocities.'},
  baseline: {src:'viewer-baseline.png',alt:'FISH Baseline page with ordered sin/cos and polynomial components, protected H I, fit boundary warning and residual spectrum.',caption:'Baseline: edit functions and ranges, inspect AA and BB, then update the preview. Click to enlarge.',description:'The upper panel shows the observed spectrum and fitted components; the lower panel shows their subtraction. The example reports a period at the search limit: inspect residuals and fit details. Detected RFI (0) is a search result, not proof of no interference.'}
};
document.querySelectorAll('.viewer-choice').forEach(button => {
  button.addEventListener('click', () => {
    const view = viewerImages[button.dataset.viewer];
    document.querySelector('#viewer-image').src = view.src;
    document.querySelector('#viewer-image').alt = view.alt;
    document.querySelector('#viewer-image-link').href = view.src;
    document.querySelector('#viewer-caption').textContent = view.caption;
    document.querySelector('#viewer-description').textContent = view.description;
    document.querySelectorAll('.viewer-choice').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  });
});
