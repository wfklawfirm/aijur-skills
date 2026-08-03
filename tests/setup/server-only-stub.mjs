// Empty stub. Real `server-only` intentionally throws when imported outside a
// server bundle (its `exports` map picks that behaviour via the "default"
// condition, and only resolves to a no-op under the "react-server" condition
// that Next's bundler sets). Our test runner is plain Node, not Next's
// bundler, so this loader hook (see register.mjs) redirects the bare
// specifier here instead — the same no-op Next itself would use.
export {};
