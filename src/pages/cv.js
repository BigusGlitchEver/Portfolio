import { useEffect } from 'react';

/**
 * This page is intentionally retired. It used to render a hand-maintained CV
 * that fell out of sync with the real CV (ShmooCV.pdf) and omitted all of the
 * Steam production work. Rather than maintain two CVs, this route now just
 * forwards anyone who lands here (bookmarks, old links, search engines) to
 * the current PDF, which is the single source of truth going forward.
 */
const CVRedirectPage = () => {
  useEffect(() => {
    window.location.replace('/ShmooCV.pdf');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <p>
        Redirecting to the current CV... if nothing happens,{' '}
        <a href="/ShmooCV.pdf" className="text-blue-500 hover:underline">
          click here
        </a>
        .
      </p>
    </div>
  );
};

export default CVRedirectPage;
