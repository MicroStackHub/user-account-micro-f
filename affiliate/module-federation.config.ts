export const mfConfig = {
  name: "affiliate", // MUST match entryGlobalName
  filename: "remoteEntry.js",
  exposes: {
    "./AffiliateDashboard": "./src/components/AffiliateDashboard",
  },
  remotes: {
    // This part is only used if this is also acting as host (optional)
    // Example: host: "host@http://localhost:8080/remoteEntry.js"
  },
  shared: ["react", "react-dom"],
  dts: false,
};
