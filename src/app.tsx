import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl container text-center">
          <p className="text-foreground/85 text-lg">
            Convide seus amigos e planeje sua próxima viagem
          </p>
          <div></div>
          <p className="text-sm text-muted-foreground">
            Ao planejar sua viagem pela plann.er, você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a className="text-foreground/85 underline" href="#">
              termos de uso
            </a>{" "}
            e{" "}
            <a className="text-foreground/85 underline" href="#">
              política de privacidade
            </a>
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}
