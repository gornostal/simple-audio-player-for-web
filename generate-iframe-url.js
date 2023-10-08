function genIframeUrl(frameBaseUrl, mp3, title, subtitle) {
  const iframeUrl = `${frameBaseUrl}/?mp3=${encodeURIComponent(
    mp3
  )}&title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(
    subtitle
  )}`;
  console.log(iframeUrl);
  return iframeUrl;
}
genIframeUrl(
  "http://localhost:8080",
  "https://audioarticles.blob.core.windows.net/files/me/20e14d59-f388-4722-95c0-53e312c86250.mp3",
  "Sample 1: The problem-solver’s playbook: 17 questions to sharpen your thinking",
  'Post from <a href="https://medium.com/irlproduct/the-problem-solvers-playbook-17-questions-to-sharpen-your-thinking-167e2ce134c2">medium.com</a>. Compare the difference in audio if you have a Medium membership.'
);
