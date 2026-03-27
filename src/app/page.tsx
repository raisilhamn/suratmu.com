import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://c.tenor.com/AfMj1IQE0pMAAAAd/tenor.gif" alt="" />
      <Alert className="max-w-lg border-white/20 bg-white/5">
        <AlertDescription className="text-white text-center">
          Mohon untuk tidak mengirimkan email ke domain ini. Segala email yang dikirimkan ke domain ini akan menjadi milik pemilik domain. Terima kasih.
        </AlertDescription>
      </Alert>
    </div>
  );
}
