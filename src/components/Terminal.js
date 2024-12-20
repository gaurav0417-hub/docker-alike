import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const fitAddon = new FitAddon();

  useEffect(() => {
    const terminal = new Terminal();
    terminal.loadAddon(fitAddon);
    terminal.open(terminalRef.current);
    fitAddon.fit();

    // Simulate Docker CLI
    terminal.writeln("Welcome to Docker Lab!");
    terminal.writeln("Type Docker commands here...");

    return () => {
      terminal.dispose();
    };
  }, []);

  return <div ref={terminalRef} style={{ height: "300px", width: "100%" }} />;
};

export default TerminalComponent;
