import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const jsonParse = await response.json();

            if (response.ok) {
                setWorkouts(jsonParse);
            }
        }

        fetchWorkouts();
    }, []);


    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
                <WorkoutForm/>
            </div>
        </div>
    );
}

export default Home;