import { StyleSheet, Text, View, StatusBar, Image, Button,Modal } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import React, {useState, useEffect, use} from 'react';


export interface LancheCardapio{
  nome:string
  price: number
  img:string
} 

export interface BebidaCardapio{
  nome:string
  img:string
  price:number
}

export default function App() {
   const cardapio:Record<string, any>= {
    lanche1:{ 
      nome:"hamburguer",
      price:  10,
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg",
    },
    lanche2:{
      nome:"pizza",
      price: 30.30,
      img: "https://as1.ftcdn.net/jpg/18/20/85/16/1000_F_1820851634_DgmrTNgcIbCtiL2Hnw59SX7ajKstMSbz.jpg"
    },
    lanche3:{
      nome:"hotdog",
      price: 20.20,
      img: "https://as2.ftcdn.net/jpg/15/73/99/75/1000_F_1573997594_TW7NOST4FbeObHLOgj9IvNPbGobyT1xn.jpg",
    },
  }


  const linkbebida:Record<string, any> ={
    bebida1:{    
      nome:"Cocaquina",
      img:"https://lacascada.com.bo/wp-content/uploads/2023/11/750.jpg",
      price:10
    },    
    bebida2:{ 
      nome:"Tampico" ,  
      img:"https://tampico.com/wp-content/uploads/2022/01/citrus-hero-img-min.png",
      print:20
    },    
    bebida3:{    
      nome:"Chá",
      img:"https://totalpass.com/wp-content/uploads/2025/08/cha.jpg",
      price:25
    },
    bebida4:{ 
      nome:"Suco",
      price:30,   
      img:"https://static.ndmais.com.br/2024/09/suco-laranja-freepik-800x533.jpg"
    }  
  }


  const [selecionado, setSelecionado] = useState('');
  const [selecionadoBebida, setSelecionadoBebida] = useState('');
  const [visivel, setVisible] = useState(false)


  let [valor, setValor] =useState(false)
  return (
    <View style={styles.container}>
      
      {selecionado !== '' && (
        <View style={styles.resultado}>
          <Image 
            source={{ uri: cardapio[selecionado].img }} 
            style={styles.foto} 
            resizeMode="contain"
          />
          <Text style={styles.texto}>R$ {cardapio[selecionado].price.toFixed(2)}</Text>
        </View>
      )}
      <View style={styles.pickerBox}>
      <Picker
        selectedValue={selecionado}
        style={{ width: 200, height: 50, borderWidth:1, borderColor:'black', paddingLeft:5 }}
        onValueChange={(itemValue) => setSelecionado(itemValue)}
      >
        <Picker.Item label="Escolha um lanche" value="" />
        <Picker.Item label="Hambúrguer" value="lanche1" />
        <Picker.Item label="Pizza" value="lanche2" />
        <Picker.Item label="Hot Dog" value="lanche3" />
      </Picker>
      </View>
      


      {/* Parte das bebida\n\n */}
      {selecionadoBebida !== '' && (
        <View style={styles.resultado}>
          <Image 
            source={{ uri: linkbebida[selecionadoBebida].img }} 
            style={styles.foto} 
            resizeMode="contain"
          />
          <Text style={styles.texto}>R$ {linkbebida[selecionadoBebida].price.toFixed(2)}</Text>
        </View>
      )}
      <View style={styles.pickerBox}>
      <Picker
        selectedValue={selecionadoBebida}
        style={{ width: 200, height: 50, borderWidth:1, borderColor:'black', paddingLeft:5 }}
        onValueChange={(itemValue) => setSelecionadoBebida(itemValue)}
      >
        <Picker.Item label="Escolha uma bebida" value="" />
        <Picker.Item label="Cocaquina" value="bebida1" />
        <Picker.Item label="Tampico" value="bebida2" />
        <Picker.Item label="Chá" value="bebida3" />
        <Picker.Item label="Suco" value="bebida" />
      </Picker>
      </View>

      

      <Button title='Consultar pedido' 
      disabled= {!valor}
      onPress={()=>{
        setVisible(true)
      }}/>

      <View>
        <Modal
        visible={visivel}
        >
          <Button title='Continuar escolhendo' onPress={()=>setVisible(false)}/>
          <Text>Teste</Text>
        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultado: { alignItems: 'center', marginBottom: 20, borderWidth:1, borderColor:'black',borderRadius:8, padding:4},
  foto: { 
    width: '80%',       
    height: 80,       
    maxHeight: 250,     
    borderRadius: 15,
    backgroundColor: '#f9f9f9', 
  },
  texto: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  }
});
