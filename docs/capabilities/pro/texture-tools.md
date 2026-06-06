# Texture Tools

**Commands:** 35 | **Tier:** Pro

Texture settings management, batch auditing, streaming budget analysis, and Runtime Virtual Texture authoring. Agents can inspect any texture asset (Texture2D, TextureCube, VolumeTexture, etc.), patch compression, LOD group, filtering, color space, virtual texture, and compositing settings individually or in batch, audit large texture sets against naming and size rules, analyze streaming budget consumption and get patch-oriented recommendations, and create and bind Runtime Virtual Texture assets and volumes.

Note: basic texture inspection (`get_texture_info`) is available in Lite. Pro adds all mutation commands, batch operations, auditing, streaming analysis, and RVT authoring.

## Key capabilities

- Get current texture settings including compression, sRGB, LOD group, filtering, virtual texture mode, and platform mip data; set any combination of settings with optional immediate save and rebuild
- Focused convenience commands for single-domain patches: set compression settings, LOD group, filtering mode, color space, virtual texture flag, and compositing settings
- Read and set project-level texture LOD group settings (with preview mode before committing)
- Search textures by path pattern, size, compression type, LOD group, or other criteria; apply batch setting patches to matched textures with preview mode and configurable max-texture safety cap
- Audit textures in a path for naming convention violations, oversized textures, and compression mismatches; get per-texture memory estimates and platform-size approximations
- Find texture references across assets; find textures by material usage; assess virtual texture readiness for candidate textures; get aggregate texture statistics for a content path
- Get streaming pool info and per-texture streaming state; analyze streaming budget against a target budget (MB) with top-consumer ranking; get patch-oriented streaming recommendations for common issues (large non-streaming textures, oversized assets, VT candidates); analyze platform texture budget
- Create `URuntimeVirtualTexture` assets with tile size, tile count, material type, and compression settings; get and set RVT settings
- Spawn and configure `ARuntimeVirtualTextureVolume` actors with virtual texture assignment, location, and scale; get and patch volume settings; query virtual textures in a content path; list available RVT material types for the current engine version

## Systems covered

- `UTexture2D`, `UTextureCube`, `UVolumeTexture`, `UTexture2DArray`
- `FTextureCompressionSettings`, `TextureGroup` LOD group system
- `URuntimeVirtualTexture`, `ARuntimeVirtualTextureVolume`
- Texture streaming subsystem (`IStreamingManager`, `ITextureStreamingManager`)
- Platform texture size estimation (`ITargetPlatform` cook data)
- `UTextureFactory`-backed settings import/export
