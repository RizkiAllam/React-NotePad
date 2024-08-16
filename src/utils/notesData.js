export const initialNotes = [
    {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
    id: 2,
    title: "React",
    body: "React adalah library JavaScript untuk membangun user interface. React memungkinkan pengembang untuk membuat komponen UI yang dapat digunakan kembali.",
    archived: false,
    createdAt: '2022-04-14T04:30:00.000Z'
    },
    {
    id: 3,
    title: "Tailwind CSS",
    body: "Tailwind CSS adalah framework CSS yang menyediakan utility-first class yang dapat digunakan untuk membangun desain yang fleksibel.",
    archived: true,
    createdAt: '2022-04-14T04:35:00.000Z'
    },
];

export const getNewId = () => +new Date();
