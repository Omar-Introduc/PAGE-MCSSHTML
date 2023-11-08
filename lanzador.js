/**
 * Sin embargo, podríamos preferir cargar el WebComponent desde Javascript 
 * en lugar de HTML, ya que puede ser más versátil y 
 * flexible en ciertas situaciones. Por ejemplo, si tenemos 
 * un gran número de componentes quizás podemos preferir
 * centralizar los import en un fichero central de Javascript,
 *  que pueda ser reutilizado, en lugar de tener varias etiquetas
 *  <script> en varios archivos HTML diferentes.
 */
import "./components/AppElement.js";
import "./components/SecondElement.js";