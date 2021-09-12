import * as React from 'react';

const WaitingComp: React.FC = () => {
    const [date, setDate] = React.useState<any>()
    const [isReady, setIsReady] = React.useState<boolean>(false)

    React.useEffect(() => {
        setInterval(() => {
            const currentDate: any = new Date()
            const targetDate: any = new Date('1 Oct 2021')
            const sec = (targetDate - currentDate) / 1000
            const daysToTarget = Math.floor(sec / 3600 / 24)
            const hours = Math.floor(sec / 3600) % 24
            const mins = Math.floor(sec / 60) % 60
            const newTargetDate = {
                days: daysToTarget,
                hours: hours,
                minutes: mins
            }
            setDate(newTargetDate)
            setIsReady(true)
            console.log(hours)
        }, 1000)

    }, [])

    return (
        <div>
            Start in:
            {
                isReady ? (
                    <div>
                        <div>
                            days:
                            {
                                date.days
                            }
                        </div>
                        <div>
                            hours:
                            {
                                date.hours
                            }
                        </div>
                        <div>
                            minutes:
                            {
                                date.minutes
                            }
                        </div>
                    </div>

                ) : null
            }
        </div>
    );
};

export default WaitingComp;
