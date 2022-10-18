const data = [{
    id: 1,
    status: "in progress",
    title: "1",
    content: "Pool Refinishing"
},{
    id: 2,
    status: "in progress",
    title: "2",
    content: "Balcony Renovation"
},{
    id: 3,
    status: "in progress",
    title: "3",
    content: "Parking lot Paving"
},{
    id: 4,
    status: "in progress",
    title: "4",
    content: "Exterior Painting"
},{
    id: 5,
    status: "completed",
    title: "5",
    content: "Impact Window Installation"
},];

const statuses = [{
    status: "upcoming",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
},  {
    status: "completed",
    icon: "✅",
    color: "#3981DE"
}];


export { data, statuses };
