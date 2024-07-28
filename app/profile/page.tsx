'use client'

import { ProfileAccordion } from "@/components/profile/profile-accordion";
import { ProjectsCarousel } from "@/components/custom/project-carousel";
import ProjectList from "@/components/custom/project-list";
import { ProjectDetails } from "@/types/project";

const code = `private Color OR(Color color1, Color color2)
{
    Color output = color1;
    byte r1 = color1.R; byte g1 = color1.G; byte b1 = color1.B;
    byte r2 = color2.R; byte g2 = color2.G; byte b2 = color2.B;

    return Color.FromArgb(r1 | r2, g1 | g2, b1 | b2);
}

// Fast bitmap traversing -- credit: hashi, jcvandan on Stackoverflow
public Bitmap BitmapOR(Color comparisonColor)
{
    Bitmap output = inputImg;

    // Lock bits
    Rectangle rect = new Rectangle(0, 0, output.Width, output.Height);
    BitmapData bmpData = output.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format24bppRgb);

    // Get the address of the first line
    IntPtr ptr = bmpData.Scan0;

    // Declare arrays to hold the bytes of the bitmap
    int bytes = bmpData.Stride * output.Height;
    byte[] rgbValues = new byte[bytes];

    Marshal.Copy(ptr, rgbValues, 0, bytes);

    int stride = bmpData.Stride;

    output.UnlockBits(bmpData);

    for (int col = 0; col < bmpData.Height; col++)
    {
        for (int row = 0; row < bmpData.Width; row++)
        {
            byte r = (byte)(rgbValues[(col * stride) + (row * 3) + 2]);
            byte g = (byte)(rgbValues[(col * stride) + (row * 3) + 1]);
            byte b = (byte)(rgbValues[(col * stride) + (row * 3)]);

            output.SetPixel(row, col, OR(Color.FromArgb(r, g, b), comparisonColor));
        }
    }

    return output;
}`

const projects: ProjectDetails[] = [
  {
    title: "Roblox Game #944",
    id: 1,
    creator: "Epic Coder",
    coach: "David BAZOOKA",
    language: "Roblox obv",
    progress: 100
  },
  {
    title: "Adventure Quest",
    id: 2,
    creator: "Heroic Dev",
    coach: "Sandra G",
    language: "C++",
    progress: 50
  },
  {
    title: "Space Explorer",
    id: 3,
    creator: "GalaxyGamer",
    coach: "Neil E",
    language: "JavaScript",
    progress: 75
  },
  {
    title: "Mystery Mansion",
    id: 4,
    creator: "PuzzleMaster",
    coach: "Nancy D",
    language: "Python",
    progress: 75
  },
  {
    title: "Fantasy World",
    id: 5,
    creator: "DreamCoder",
    coach: "George M",
    language: "Java",
    progress: 50
  },
  {
    title: "Racing Legends",
    id: 6,
    creator: "SpeedyDev",
    coach: "Lewis R",
    language: "C#",
    progress: 50
  },
  {
    title: "Zombie Invasion",
    id: 7,
    creator: "SurvivorPro",
    coach: "Rick H",
    language: "Unreal Engine",
    progress: 25
  },
  {
    title: "Island Survival",
    id: 8,
    creator: "CastawayDev",
    coach: "Robinson C",
    language: "Lua",
    progress: 50
  },
  {
    title: "Dungeon Crawler",
    id: 9,
    creator: "KnightCoder",
    coach: "Arthur L",
    language: "Swift",
    progress: 100
  },
  {
    title: "Space Battles",
    id: 10,
    creator: "StarWarrior",
    coach: "Leia C",
    language: "Unity",
    progress: 75
  }
]

export default function Profile() {
  return (
      <main className="flex max-h-screen max-w-screen flex-col justify-between">
        <ProjectsCarousel/>

        <ProjectList projects={projects} className="mx-4 mt-6 h-[33vh] max-h-[33vh]"/>

        <footer className="bottom-0 fixed">
          <ProfileAccordion 
            about={
              "Words words words words words"
            } 
            code={
              "Words words words words words"
            } 
            skills={
              "Words words words words words"
            }
          />
        </footer>
    </main>
  );
}
