const terminal = document.getElementById("cmdinput") as HTMLInputElement;
const output = document.getElementById("output");
const outputBox = document.getElementById("outputBox");

  terminal!.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const input = terminal!.value.trim();

      if (!input) return;

      executeCommand(input);
    }
  });

  function multiple_attr(element: HTMLElement, attributes: { [key: string]: string }): void {
    Object.keys(attributes).forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
  }

  function executeCommand(input: string): void {
    const [cmd] = input.split(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        print(` Commands:
  help        Show avaliable commands
  cd          Show links for nerd fonts and dracula theme
  ex          Show experience text
  about       Show about information
  contact     Show contact form
  cls         Clear screen
`);
        break;

      case "cd":
        show_links();
        break;

      case "ex":
        outputBox?.replaceChildren(output!);
        experience();
        break;

      case "about":
        outputBox?.replaceChildren(output!);
        about();
        break;

      case "contact":
        outputBox?.replaceChildren(output!);
        contact();
        break;

      case "cls":
        outputBox?.replaceChildren(output!);
        output?.replaceChildren();
        break;

      default:
        output!.style.textAlign = 'center';
        print(`Command not found: ${cmd}`);
    }
  }

  function about(): void {
    outputBox?.replaceChildren(output!);
    output!.textContent = `
Hello my name is Terence and I'm a developer that
graduated at the end of 2024 (yeah not a great time)
and here are a couple of things about me:

1. I like GNU/Linux and have almost gone through the whole range.
From Mint to testing all the Arch-based distros to settling on base Arch.
I made this website because I got inspired by other websites and wanted to
make a more interactive version of them.

2. I love purple. Still in the process of converting everything I own and
look at but it'll happen eventually.

3. I have been enjoying writing at the moment so if this is starting to
drag that's why.

4. The font and symbols you see on this site is proudly brought to you by Nerd Fonts
and the Dracula theme.

I am currently trying to enjoy my time instead of exhausting myself
and never enjoying anything along the way.

This website is the beginning of that!
`;
  }

  function contact(): void {
    output!.style.textAlign = 'center';
    output!.textContent = 'terence89chen@gmail.com';
  }

  function experience(): void {
    output!.style.fontSize = '1.3rem'
    output!.textContent = `Front-end: \udb80\udf1d | \udb80\udf1c | \udb80\udf1e | \udb81\udee6 |

    Back-end: \udb80\udf20 | \ue648 | \udb81\ude72 |

    Frameworks: \udb81\udf08 & React Native | \ue83e | 
    
    Misc: \uf315 | \udb82\udced | \udb81\udd48 | \udb85\ude0a | \udb82\udcc7 | `;
  }

  function show_links() {
    const link1 = document.createElement('a');
    multiple_attr(link1, {
      'href': 'https://www.nerdfonts.com/font-downloads',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link1.textContent = 'Nerd fonts';
    const link2 = document.createElement('a');
    multiple_attr(link2, {
      'href': 'https://draculatheme.com/dracula-css',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link2.textContent = 'Dracula CSS';
    const link3 = document.createElement('a');
    multiple_attr(link3, {
      'href': 'https://github.com/catppuccin/palette',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link3.textContent = 'Catppuccin CSS';
    output!.replaceWith(link1);
    outputBox?.appendChild(link2);
    outputBox?.appendChild(link3);
    outputBox!.style.flexDirection = 'column';
  }

  function print(text: string): void {
    output!.replaceChildren();
    output!.style.padding = '15px';
    output!.style.textAlign = 'left';
    output!.textContent += text;
  }
