import React, { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

const categories = [
  { key: "all", label: "All" },
  { key: "veg", label: "Veg" },
  { key: "nonveg", label: "Non‑Veg" },
  { key: "dessert", label: "Desserts" },
  { key: "drinks", label: "Drinks" },
];

const ITEMS = [
  {
    id: 1,
    title: "Margherita Pizza",
    cat: "veg",
    src: "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?cs=srgb&dl=pexels-renestrgar-13814644.jpg&fm=jpg",
  },
  {
    id: 2,
    title: "Paneer Tikka",
    cat: "veg",
    src: "https://t3.ftcdn.net/jpg/08/50/88/46/360_F_850884639_I5W4a9c9JN1veCnc2rHLtekyj7X8ZMEH.jpg",
  },
  {
    id: 3,
    title: "Caesar Salad",
    cat: "veg",
    src: "https://img.freepik.com/premium-photo/caesar-salad-with-chicken-studio-photo-products-dark-black-background-generative-ai_74760-2028.jpg",
  },
  {
    id: 4,
    title: "Veg Sushi",
    cat: "veg",
    src: "https://t3.ftcdn.net/jpg/15/22/63/22/360_F_1522632235_Dx7UhSAhWnBWN0I3sTIPVmWnPLQsVCtQ.jpg",
  },
  {
    id: 5,
    title: "Masala Dosa",
    cat: "veg",
    src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Grilled Chicken",
    cat: "nonveg",
    src: "https://www.saveur.com/uploads/2022/08/11/00-LEAD-Smokerless-Smoked-Chicken-with-Homemade-BBQ-Sauce-EITAN-BERNATH-saveur-scaled.jpg?format=webp&optimize=high&precrop=16%3A9%2Csmart",
  },
  {
    id: 7,
    title: "Mutton Curry",
    cat: "nonveg",
    src: "https://www.shutterstock.com/image-photo/spicy-delicious-mutton-curry-600w-750009280.jpg",
  },
  {
    id: 8,
    title: "Butter Chicken",
    cat: "nonveg",
    src: "https://feelgoodfoodie.net/wp-content/uploads/2024/02/Easy-Butter-Chicken-TIMG.jpg",
  },
  {
    id: 9,
    title: "Prawns Platter",
    cat: "nonveg",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4f0GAXH0o0EvyGuzllvpBPYTQ6KE5JahqUeM89Scw9vU8Bf8v430HEzopOCkKLmtEEo&usqp=CAU",
  },
  {
    id: 10,
    title: "Chicken Fry",
    cat: "nonveg",
    src: "https://i.ytimg.com/vi/XEmhGPYwjF0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6OlM2sxAdXOA7_FXjZv3RQDnRMQ",
  },
  {
    id: 11,
    title: "Chocolate Cake",
    cat: "dessert",
    src: "https://cakecarnival.com/wp-content/uploads/2020/06/93259947_215948069707857_6292766647312531296_n.jpg",
  },
  {
    id: 12,
    title: "Gulab Jamun",
    cat: "dessert",
    src: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Gulab-Jamun-Marathi-Recipe.jpg",
  },
  {
    id: 13,
    title: "Rasmalai",
    cat: "dessert",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8L8fOs0wSrCxFwJzNoENF_irNiVu81WzoLg&s",
  },
  {
    id: 14,
    title: "Ice Cream Bowl",
    cat: "dessert",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBmk8O_VMc4Ab-vcC0JbpeOEjfMo9DB29a5A&s",
  },
  {
    id: 15,
    title: "Cheesecake",
    cat: "dessert",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_O5RL4wRUnf0-d5npIwhCCPWzLdzHlASeQ&s",
  },
  {
    id: 16,
    title: "Mojito",
    cat: "drinks",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8ngLUr0lj7YSk3OKSeQVQkW8s-X5mAsBbA&s",
  },
  {
    id: 17,
    title: "Cold Coffee",
    cat: "drinks",
    src: "https://beanlycoffee.com/cdn/shop/files/cold-coffee-1_c591d264-cbeb-4802-a976-af3f1bcb61ff.jpg?v=1737670831",
  },
  {
    id: 18,
    title: "Orange Juice",
    cat: "drinks",
    src: "https://s.yimg.com/ny/api/res/1.2/9URpurTPjgDzDBuP3dbiaA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE1NjA7aD04NzY7Y2Y9d2VicA--/https://media.zenfs.com/en/chowhound_739/8b6e4a850d2b3e5259259f8d0915bbc7",
  },
  {
    id: 19,
    title: "Masala Chai",
    cat: "drinks",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGicVTCdIwMDok6HTa_rXVbXZ0MiV9IcbtQ&s",
  },
  {
    id: 20,
    title: "Strawberry Smoothie",
    cat: "drinks",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP4nSyM5myMf5JyKxJvy-nSf3-FioPy8EIQ&s",
  },
  {
    id: 21,
    title: "Pasta Primavera",
    cat: "veg",
    src: "https://cdn.loveandlemons.com/wp-content/uploads/2022/06/pasta-primavera.jpg",
  },
  {
    id: 22,
    title: "Veg Burger",
    cat: "veg",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22nvoGHoamepBZfcdK6IjT1-hd6nQIRlIrw&s",
  },
  {
    id: 23,
    title: "Chicken Burger",
    cat: "nonveg",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3arOaTKgWRpKeUev5rxY2zrZlbqyrsZbi4g&s",
  },
  {
    id: 24,
    title: "Sushi Combo",
    cat: "dessert",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQRYHpoDeQ-9l7s7Oa3xp0e3qS5F2ao7_XQ&s",
  },
  {
    id: 25,
    title: "Tandoori Platter",
    cat: "nonveg",
    src: "https://pixahive.com/wp-content/uploads/2020/10/tandoori-platter-131599-pixahive.jpg",
  },
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState({});

  const items = useMemo(() => {
    if (active === "all") return ITEMS;
    return ITEMS.filter((it) => it.cat === active);
  }, [active]);

  const openLightbox = useCallback(
    (index) => {
      const it = items[index];
      setLightbox({ index, src: it.src, title: it.title });
      document.body.style.overflow = "hidden";
    },
    [items]
  );

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const go = useCallback(
    (dir) => {
      if (lightbox == null) return;
      let next = lightbox.index + dir;
      if (next < 0) next = items.length - 1;
      if (next >= items.length) next = 0;
      const it = items[next];
      setLightbox({ index: next, src: it.src, title: it.title });
    },
    [lightbox, items]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, go]);

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Restaurant Gallery
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={classNames(
              "px-3 md:px-4 py-2 rounded-full text-sm md:text-base transition-all",
              "border backdrop-blur-sm",
              active === c.key
                ? "bg-black text-white border-black shadow"
                : "bg-white/70 text-gray-700 border-gray-200 hover:shadow"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <AnimatePresence>
          {items.map((it, idx) => (
            <motion.article
              key={it.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-black"
            >
              {/* Image wrapper keeps a 4:3 aspect */}
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                {!loaded[it.id] && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <ImageIcon className="w-8 h-8 animate-pulse" />
                  </div>
                )}
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  onLoad={() => setLoaded((s) => ({ ...s, [it.id]: true }))}
                  className={classNames(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-300",
                    "group-hover:scale-105"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => openLightbox(idx)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-2 rounded-full text-white bg-black/80 backdrop-blur-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-white/80"
                  aria-label={`Open ${it.title}`}
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-sm">View</span>
                </button>
              </div>
              <div className="p-3">
                <h3
                  className="font-medium text-sm md:text-base truncate"
                  title={it.title}
                >
                  {it.title}
                </h3>
                <p className="text-xs text-gray-500 capitalize">{it.cat}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" /> Close
              </button>
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="mt-3 text-white/90 text-sm flex items-center justify-between">
                <span className="font-medium">{lightbox.title}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
