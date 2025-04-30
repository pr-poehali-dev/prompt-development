
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "Женская стрижка",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    alt: "Мужская стрижка",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519735777905-309e9a8603d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "Окрашивание волос",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "Укладка волос",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "Свадебная прическа",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "Модельная стрижка",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <p className="text-white text-sm">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
