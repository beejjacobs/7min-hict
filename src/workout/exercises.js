export const Groups = {
  Total: 'Total Body',
  Lower: 'Lower Body',
  Upper: 'Upper Body',
  Core: 'Core'
};

export const Exercises = [
  {name: 'Jumping Jacks', group: Groups.Total},
  {name: 'Wall Sit', group: Groups.Lower},
  {name: 'Press Ups', group: Groups.Upper},
  {name: 'Abdominal Crunch', group: Groups.Core},
  {name: 'Step-up onto Chair', group: Groups.Total},
  {name: 'Squat', group: Groups.Lower},
  {name: 'Triceps Dip', group: Groups.Upper},
  {name: 'Plank', group: Groups.Core},
  {name: 'High knees', group: Groups.Total},
  {name: 'Lunge', group: Groups.Lower},
  {name: 'Press Up + Rotation', group: Groups.Upper},
  {name: 'Side Plank', group: Groups.Core},
];

function allStages() {
  const stages = [];
  for (let i = 0; i < Exercises.length; i++){
    let exercise = Exercises[i];
    stages.push({
      ...exercise,
      time: 10
    });
    if (i !== Exercises.length - 1) {
      stages.push({
        name: 'Rest',
        time: 5
      });
    }
  }
  return stages;
}

export const AllStages = allStages();
