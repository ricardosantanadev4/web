
import { ArrowRight, Copy, Mail } from 'lucide-react';
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { Icon, InputField, InputRoot } from './components/input';

export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot error>
          <Icon>
            <Mail className='size-5' />
          </Icon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
