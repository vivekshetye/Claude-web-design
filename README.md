# Claude Web Design

A cinematic technical solopreneur portfolio website built with AI-powered design workflows using Stitch.

## Stitch Setup

This project uses [Stitch](https://stitch.withgoogle.com) by Google Labs for AI-powered design-to-code workflow. Follow these steps to configure Stitch in Claude Code.

### 1. Install Stitch Skills

Install the Google Stitch skills using:

```bash
npx skills add google-labs-code/stitch-skills
```

This will install all Stitch skills including:
- `stitch-design` — Main Stitch design skill
- `design-md` — Design MD generation
- `enhance-prompt` — Prompt enhancement
- `react:components` — React component generation
- `shadcn-ui` — shadcn/ui integration
- `taste-design` — Design taste analysis
- `stitch-loop` — Loop functionality
- `remotion` — Remotion animations

### 2. Add STITCH MCP to Claude Code

Install and initialize the Stitch MCP server:

```bash
npx @_davideast/stitch-mcp init
```

This will add the Stitch MCP server to your `.mcp.json` file. The MCP server enables direct communication between Claude Code and Stitch.

### 3. Set STITCH_API_KEY

1. Get your Stitch API key from [Google AI Studio](https://aistudio.google.com) or your Stitch account

2. Add the API key to your project's local settings:

   Create or edit `.claude/settings.local.json`:

   ```json
   {
     "env": {
       "STITCH_API_KEY": "your-api-key-here"
     }
   }
   ```

   > **Important:** The `settings.local.json` file is automatically excluded from git (already in `.gitignore`), so your API key will never be committed to version control.

3. The API key will be available to Claude Code and the Stitch MCP server

### 4. Verify Setup

Run the following to verify everything is working:

```bash
claude mcp list
```

You should see the `stitch` MCP server listed.

## Troubleshooting

### MCP server not showing up

Make sure `.mcp.json` exists in your project root and has the correct configuration:

```json
{
  "mcpServers": {
    "stitch": {
      "type": "stdio",
      "command": "npx",
      "args": ["@_davideast/stitch-mcp", "proxy"]
    }
  }
}
```

### API key not being recognized

Ensure `settings.local.json` is valid JSON and the `STITCH_API_KEY` is set correctly. Don't include quotes around the API key value itself.

### Skills not installing

Run the install command again:

```bash
npx skills add google-labs-code/stitch-skills
```

## Project Structure

```
.
├── .claude/
│   └── settings.local.json    # Local settings with API keys (not git-tracked)
├── .mcp.json                  # MCP server configuration
├── skills-lock.json           # Stitch skills configuration
├── DESIGN.md                  # Design system documentation
└── resources/
    └── Resume_Vivek_Shetye.pdf
```