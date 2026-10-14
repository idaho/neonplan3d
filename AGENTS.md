# Custom feature maintenance

This fork maintains every agreed custom feature in docs/custom-features.json.
The German specification in docs/custom-features.md explains the required behaviour.
docs/custom-feature-fixes.md is the binding regression and reconstruction checklist.
Read it before rebuilding features or resolving upstream conflicts; the fixes are
part of the feature contract, not optional historical notes. Add future fixes there
with expected behaviour, regression checks and pack migrations where applicable.

When updating from Mastershort/neonplan3d, integrate current original main with
the complete custom implementation. Implement and verify any missing agreed
feature; merging older individual feature branches alone does not complete the update.

- Keep upstream behaviour, especially roof-window controls, states and floating options.
- Preserve saved plans, pack IDs, individual HA bindings and product colour choices.
- Run the updater's feature contracts, frontend/backend tests, build and signed-pack checks.
- A failed test or missing contract prevents a ready build. Resolve source conflicts
  using the specification and behaviour tests; regenerate conflicting bundles from source.
- Use the consolidated feature/custom-features-complete branch and verified custom
  branch. Keep original main separate.
- Use scripts/upgrade-custom-packs.mjs for declared pack metadata and geometry alignment.
  Do not modify or run legacy generators under tools/product-packs/.
- Keep signed exports in private/product-packs-v2/neon and color.
  Preserve recovery backups and keep signing keys out of commits and release archives.
- After pack model changes, regenerate the regular gallery with
  scripts/render-custom-pack-previews.mjs; follow docs/pack-preview-maintenance.md.
  Verify the pictures visually. A successful render does not establish model fidelity.
- Local implementation, commits, integration and verification are authorized.
  Publishing, pushing and Home Assistant deployment require a separate instruction.

Useful commands from the repository root:

- node scripts/neon-update.mjs prepare
- node scripts/neon-update.mjs status
- node scripts/neon-update.mjs resume

Use adopt only for a fully verified candidate. Report implemented, verified and
installed status accurately; a specification is not a substitute for working code.
