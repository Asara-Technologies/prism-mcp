# Cross-System Debugger

**Commands:** 31 | **Tier:** Pro

Pro-tier runtime debugging for systems that do not use the Blueprint debugger backend: Behavior Tree execution, Control Rig/RigVM instruction traces, and StateTree trace debugging. All three use public engine APIs rather than private editor internals. Behavior Tree and RigVM breakpoints are session-scoped polling breakpoints that pause PIE when observed public runtime state reaches the target execution or instruction index. StateTree breakpoints write transient editor-data breakpoints on the StateTree asset and require cleanup when used as temporary diagnostics.

Note: Blueprint live debugging (breakpoints, stepping, watches, pin evaluation, exec trace, debug target management) is part of the Lite tier and is documented separately.

## Key capabilities

- List live Behavior Tree debug targets and read runtime state: active node set, Blackboard runtime values, full runtime description, and execution-index breakpoints with `precision: "polling"`
- Set, remove, list, clear, and poll Behavior Tree session breakpoints; pause and continue PIE execution on a matched execution index
- List live RigVM / Control Rig debug targets; read runtime state (host path, event queue, debug mode, evaluating flag, recent instruction visit order)
- Enable/disable RigVM debug mode; set, remove, list, and clear RigVM session breakpoints with `precision: "post_execute_visit_order"` semantics; read RigVM break state and continue execution
- Check StateTree trace debugger availability at runtime (requires `WITH_STATETREE_TRACE_DEBUGGER`); list active trace instances and attach/detach analysis sessions
- Read StateTree pause state; step analysis with `step_into`, `step_over`, `step_back_into`, and `step_back_over` verbs; resume analysis
- Set, remove, list, and clear StateTree breakpoints on states, tasks, transitions, or any target kind; breakpoint types include `on_enter`, `on_exit`, and `on_transition`

## Systems covered

- `UBehaviorTreeComponent` execution index polling breakpoints
- `UBlackboardComponent` runtime key readback
- `URigVMHost` / `UControlRig` debug target enumeration and instruction-visit-order breakpoints
- `URigVM` debug mode (`SetRigVMDebugMode`)
- `UStateTreeEditorData` transient breakpoint storage
- `IStateTreeTraceProvider` / StateTree trace debugger (WITH_STATETREE_TRACE_DEBUGGER builds)
- StateTree analysis attach/detach and stepping (flat trace event model)
