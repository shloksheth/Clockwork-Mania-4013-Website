export type RobotAnnotation = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  detailText: string;
};

export const robotAnnotations: RobotAnnotation[] = [
  {
    id: "drivetrain",
    label: "Drivetrain",
    description: "Swerve drive system for omnidirectional movement",
    x: 28,
    y: 62,
    detailText:
      "The drivetrain uses swerve modules for holonomic translation and rotation, enabling precise alignment to field elements during both autonomous and teleoperated play while maintaining predictable current draw through tuned slew limits.",
  },
  {
    id: "intake",
    label: "Intake Mechanism",
    description: "Pneumatic-actuated intake for game element collection",
    x: 72,
    y: 38,
    detailText:
      "A pneumatically articulated intake deploys to capture game pieces from the floor and handoff stations, with compliance built into rollers and hard stops to protect mechanisms during high-speed contacts.",
  },
  {
    id: "elevator",
    label: "Elevator / Arm",
    description: "Multi-stage elevator for scoring at height",
    x: 52,
    y: 22,
    detailText:
      "A staged elevator lifts the scoring end effector through the robot’s silhouette, using motion profiling and encoder feedback to hit repeatable setpoints for scoring geometry.",
  },
  {
    id: "shooter",
    label: "Shooter / Scoring",
    description: "Flywheel-based scoring mechanism",
    x: 48,
    y: 48,
    detailText:
      "Flywheels spin up to a closed-loop velocity target, trading off shot consistency against cycle time, with shot sequencing coordinated with vision alignment where applicable.",
  },
  {
    id: "vision",
    label: "Vision System",
    description: "Limelight camera for AprilTag tracking and autonomous aiming",
    x: 58,
    y: 18,
    detailText:
      "Limelight processes AprilTags and retroreflective targets to feed pose estimates into autonomous paths and assist aiming during teleop, with latency-budgeted filtering for stable control loops.",
  },
  {
    id: "electronics",
    label: "Electronics Panel",
    description: "REV control hub, power distribution, and custom wiring harness",
    x: 22,
    y: 42,
    detailText:
      "The electronics stack consolidates the REV control system, PDH pathways, and sensor runs into a serviceable panel, with branch circuits labeled and strain relief guarding against match vibrations.",
  },
];
