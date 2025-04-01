type HumanReflectionProps = {
    children: React.ReactNode;
  };
  
  export default function HumanReflection({ children }: HumanReflectionProps) {
    return (
      <div className="my-10 p-6 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Human Reflections
        </h3>
        <div className="prose dark:prose-invert prose-blue max-w-none">
          {children}
        </div>
      </div>
    );
  }