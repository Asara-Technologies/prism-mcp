# Sequencer and Cinematics

**Commands:** 216 | **Tier:** Pro

Full LevelSequence authoring pipeline covering asset lifecycle, object bindings, track and section CRUD, per-channel keyframe editing, curve editor integration, Camera/CineCameraActor spawnables, sub-sequences, Movie Render Queue submission, and a session-scoped clipboard for copying and pasting bindings, tracks, sections, and folders. The keyframe surface handles float, double, bool, integer, byte, and string channels with per-key interpolation and tangent control, and supports batch key insertion and curve baking within frame ranges.

## Key capabilities

- Create LevelSequence assets; set display rate, tick resolution, playback range, clock source, and evaluation type
- Add and manage possessable and spawnable bindings; create CineCameraActor spawnables directly; convert between possessable and spawnable in place
- Add, remove, and rename tracks (transform, audio, event, camera cut, skeletal animation, and more) at binding or root level
- Add sections, set section frame ranges, configure ease-in/ease-out, blend type, and completion mode; set event endpoint functions
- Read and write per-channel keyframes: add, remove, batch insert, set interpolation (linear, constant, cubic, auto), and set tangent handles
- Get and set channel default values; bake float/double channel curves to explicit keys across a frame range
- Open the Curve Editor panel, query and set outliner channel selection, select/deselect keys, and control per-channel curve visibility
- Organize bindings and tracks into named folders; move tracks and bindings between folders; rename folders
- Tag bindings with named metadata tags; find bindings by tag
- Bake world-space transforms for actor bindings at every frame
- Copy and paste bindings, tracks, sections, and folders between sequences via an MCP session clipboard
- Add, find, and delete named marked frames on a sequence
- Submit sequences to the Movie Render Queue; query render queue subsystem state; manage render presets
- List, get, and set sub-sequence section assets; manage camera cut sections

## Systems covered

- `ULevelSequence`, `UMovieScene`, `UMovieSceneSection`, `UMovieSceneTrack`
- `UMovieSceneFloatChannel`, `UMovieSceneBoolChannel`, `UMovieSceneIntegerChannel`, `UMovieSceneStringChannel`
- `UMovieScene3DTransformTrack`, `UMovieSceneCameraCutTrack`, `UMovieSceneSubTrack`
- `ACineCameraActor` / `UCineCameraComponent` spawnable authoring
- `UMovieRenderPipelineProjectSettings`, `UMovieRenderQueue`, Movie Render Queue subsystem
- Sequencer Curve Editor (`ISequencerCurveEditor`, `FCurveEditorSelection`)
- `FMovieSceneObjectBindingID`, binding tag system
- `UMovieSceneMarkedFrame`, marked-frame CRUD
