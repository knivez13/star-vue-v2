export const SampleData = {
    getBookingsData() {
        return [
            {
                id: 'COBPI-0015',
                date: '03/12/2024 06:00 am',
                date_to: '03/12/2024 06:00 pm',
                type: 'Table A',
                trans_date: '2024-03-12 10:24:05.067',
                facility: 'Badminton',
                client: 'COBPI-0235',
                sched_date: '03/15/2024 07:00 pm',
                duration: '120',
                companion: 'MIS',
                status: 'Pending',
                start_date: '03/14/2024 09:31 am',
                end_date: '03/14/2024 09:31 am',
                reason: 'something urgent came up'
            }
        ];
    },
    getBookings() {
        return Promise.resolve(this.getBookingsData());
    }
};
