interface ImportMetaEnv {
  readonly VITE_PRIVATE_ID: string;
  readonly VITE_APP_TEMPLATE_ID: string;
  readonly VITE_SERVICE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
